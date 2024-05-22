import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	client: {},
	server: {
		NODE_ENV: z.enum(['development', 'production', 'test']),
		FACEBOOK_CLIENT_ID: z.string(),
		FACEBOOK_CLIENT_SECRET: z.string(),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
		FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
	},
});
