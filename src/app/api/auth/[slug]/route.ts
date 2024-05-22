import { cookies } from 'next/headers';

import { env } from '@/common/lib/env';
import { OAUTH_STATE_COOKIE_NAME } from '@/modules/api/oauth/oauth.constants';
import { isOAuthProvider } from '@/modules/api/oauth/oauth.providers';
import * as oauthService from '@/modules/api/oauth/oauth.service';

import type { Params } from '@/common/types/next.types';

export const GET = async (
	_request: Request,
	{ params: { slug } }: { params: Params<'slug'> },
) => {
	if (!isOAuthProvider(slug)) {
		return new Response(null, { status: 400 });
	}

	const { state, url } = await oauthService.createAuthorizationURL(slug);

	cookies().set(OAUTH_STATE_COOKIE_NAME, state, {
		path: '/',
		secure: env.NODE_ENV === 'production',
		httpOnly: true,
		maxAge: 60 * 10,
		sameSite: 'lax',
	});

	return Response.redirect(url);
};
