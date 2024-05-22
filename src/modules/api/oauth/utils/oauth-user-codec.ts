import { oauthUserSchema } from '../oauth.schemas';

import type { OAuthUser } from '../oauth.schemas';

export const encodeOAuthUser = (user: OAuthUser) =>
	encodeURIComponent(JSON.stringify(user));

export const decodeOAuthUser = (payload: string) => {
	try {
		const user = JSON.parse(decodeURIComponent(payload));

		return oauthUserSchema.parse(user);
	} catch {
		return null;
	}
};
