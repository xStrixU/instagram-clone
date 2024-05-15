import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	client: {},
	server: {
		NODE_ENV: z.enum(['development', 'production', 'test']),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
	},
});
