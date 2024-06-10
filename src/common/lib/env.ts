import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
	client: {},
	server: {
		NODE_ENV: z.enum(['development', 'production', 'test']),
		S3_REGION: z.string(),
		S3_ACCESS_KEY: z.string(),
		S3_ACCESS_SECRET: z.string(),
		S3_BUCKET_NAME: z.string(),
		THUMBNAIL_ENDPOINT: z.string(),
		FACEBOOK_CLIENT_ID: z.string(),
		FACEBOOK_CLIENT_SECRET: z.string(),
	},
	runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		S3_REGION: process.env.S3_REGION,
		S3_ACCESS_KEY: process.env.S3_ACCESS_KEY,
		S3_ACCESS_SECRET: process.env.S3_ACCESS_SECRET,
		S3_BUCKET_NAME: process.env.S3_BUCKET_NAME,
		THUMBNAIL_ENDPOINT: process.env.THUMBNAIL_ENDPOINT,
		FACEBOOK_CLIENT_ID: process.env.FACEBOOK_CLIENT_ID,
		FACEBOOK_CLIENT_SECRET: process.env.FACEBOOK_CLIENT_SECRET,
	},
});
