import { redirect, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

import {
	OAUTH_PROVIDER_PARAM,
	OAUTH_USER_PARAM,
} from '@/modules/api/oauth/oauth.constants';
import { isOAuthProvider } from '@/modules/api/oauth/oauth.providers';
import { decodeOAuthUser } from '@/modules/api/oauth/utils/oauth-user-codec';

export const useSignUpOAuthAuthBox = () => {
	const searchParams = useSearchParams();

	const provider = searchParams.get(OAUTH_PROVIDER_PARAM) ?? '';
	const oauthUser = searchParams.get(OAUTH_USER_PARAM) ?? '';

	const user = decodeOAuthUser(oauthUser);

	if (!user || !isOAuthProvider(provider)) {
		redirect('/sign-up');
	}

	useEffect(() => {
		const params = new URLSearchParams(searchParams.toString());

		params.delete(OAUTH_PROVIDER_PARAM);
		params.delete(OAUTH_USER_PARAM);

		window.history.replaceState(null, '', `?${params.toString()}`);
	}, [searchParams]);

	return { provider, user };
};
