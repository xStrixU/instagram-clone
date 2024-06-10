import { cookies } from 'next/headers';

import { OAuthRequestError } from '@/modules/api/oauth/errors/oauth-request-error';
import { OAuthResponseError } from '@/modules/api/oauth/errors/oauth-response-error';
import {
	OAUTH_PROVIDER_PARAM,
	OAUTH_STATE_COOKIE_NAME,
	OAUTH_USER_PARAM,
} from '@/modules/api/oauth/oauth.constants';
import { isOAuthProvider } from '@/modules/api/oauth/oauth.providers';
import * as oauthService from '@/modules/api/oauth/oauth.service';
import { encodeOAuthUser } from '@/modules/api/oauth/utils/oauth-user-codec';
import * as sessionsService from '@/modules/api/sessions/sessions.service';
import * as usersService from '@/modules/api/users/users.service';
import { createSessionCookie } from '@/modules/auth/utils/session.utils';

import type { Params } from '@/common/types/next.types';

export const GET = async (
	requet: Request,
	{ params: { slug } }: { params: Params<'slug'> },
) => {
	if (!isOAuthProvider(slug)) {
		return new Response(null, { status: 400 });
	}

	const url = new URL(requet.url);
	const cookieStore = cookies();

	const code = url.searchParams.get('code');
	const state = url.searchParams.get('state');
	const storedState = cookieStore.get(OAUTH_STATE_COOKIE_NAME)?.value ?? null;

	cookieStore.delete(OAUTH_STATE_COOKIE_NAME);

	if (!code || !state || !storedState || state !== storedState) {
		return new Response(null, {
			status: 400,
		});
	}

	try {
		const oauthUser = await oauthService.validateCode(slug, code);
		const existingUser = await usersService.findByOAuthAccount({
			provider: slug,
			accountId: oauthUser.accountId,
		});

		if (existingUser) {
			const session = await sessionsService.create(existingUser);

			createSessionCookie(session);

			return new Response(null, {
				status: 302,
				headers: {
					Location: '/',
				},
			});
		}

		const pictureURL = await oauthService.uploadUserPicture(oauthUser);
		const newOAuthUser = { ...oauthUser, pictureURL };

		const params = new URLSearchParams();

		params.set(OAUTH_PROVIDER_PARAM, slug);
		params.set(OAUTH_USER_PARAM, encodeOAuthUser(newOAuthUser));

		return new Response(null, {
			status: 302,
			headers: {
				Location: `/sign-up?${params.toString()}`,
			},
		});
	} catch (err) {
		if (err instanceof OAuthRequestError) {
			return new Response(null, {
				status: 400,
			});
		}

		if (err instanceof OAuthResponseError) {
			return new Response(null, {
				status: 409,
			});
		}

		return new Response(null, {
			status: 500,
		});
	}
};
