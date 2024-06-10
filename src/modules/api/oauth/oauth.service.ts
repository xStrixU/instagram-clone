import { generateState, OAuth2RequestError } from 'arctic';
import { match } from 'ts-pattern';
import { ZodError } from 'zod';

import { moveFile, uploadFileFromUrl } from '../common/database/file-storage';
import { createThumbnailURL } from '../common/utils/thumbnail.utils';
import { createUserPictureName } from '../users/users.utils';
import { OAuthRequestError } from './errors/oauth-request-error';
import { OAuthResponseError } from './errors/oauth-response-error';
import { OAuthUnknownError } from './errors/oauth-unknown-error';
import { facebook } from './oauth.config';
import { OAUTH_PICTURE_S3_PREFIX } from './oauth.constants';
import { validateFacebookCode } from './utils/validate-code';

import type { OAuthProvider } from './oauth.providers';
import type { OAuthUser } from './oauth.schemas';

export const createAuthorizationURL = async (provider: OAuthProvider) => {
	const state = generateState();
	const url = await match(provider)
		.with('facebook', () =>
			facebook.createAuthorizationURL(state, {
				scopes: ['email', 'public_profile', 'user_birthday'],
			}),
		)
		.exhaustive();

	return { state, url };
};

export const validateCode = async (provider: OAuthProvider, code: string) => {
	try {
		switch (provider) {
			case 'facebook':
				return await validateFacebookCode(code);
		}
	} catch (err) {
		if (err instanceof OAuth2RequestError) {
			throw new OAuthRequestError();
		}

		if (err instanceof ZodError) {
			throw new OAuthResponseError();
		}

		throw new OAuthUnknownError(err);
	}
};

export const uploadUserPicture = async (user: OAuthUser) => {
	const name = `${OAUTH_PICTURE_S3_PREFIX}${user.accountId}`;

	await uploadFileFromUrl({
		url: user.pictureURL,
		name,
	});

	return createThumbnailURL(name);
};

interface PersistUserPictureInput {
	accountId: string;
	userId: string;
}

export const persistUserPicture = async ({
	accountId,
	userId,
}: PersistUserPictureInput) => {
	const oauthPictureName = `${OAUTH_PICTURE_S3_PREFIX}${accountId}`;
	const profilePictureName = createUserPictureName(userId);

	await moveFile({
		src: oauthPictureName,
		dest: profilePictureName,
	});
};
