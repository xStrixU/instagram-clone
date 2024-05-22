import { generateState, OAuth2RequestError } from 'arctic';
import { match } from 'ts-pattern';
import { ZodError } from 'zod';

import { OAuthRequestError } from './errors/oauth-request-error';
import { OAuthResponseError } from './errors/oauth-response-error';
import { OAuthUnknownError } from './errors/oauth-unknown-error';
import { facebook } from './oauth.config';
import { validateFacebookCode } from './utils/validate-code';

import type { OAuthProvider } from './oauth.providers';

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
