import { Facebook } from 'arctic';

import { env } from '@/common/lib/env';
import { getBaseUrl } from '@/common/lib/getBaseUrl';

export const facebook = new Facebook(
	env.FACEBOOK_CLIENT_ID,
	env.FACEBOOK_CLIENT_SECRET,
	`${getBaseUrl()}/api/auth/facebook/callback`,
);
