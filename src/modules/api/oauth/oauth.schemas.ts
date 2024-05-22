import { z } from 'zod';

export const oauthUserSchema = z.object({
	accountId: z.string(),
	fullName: z.string(),
	email: z.string().email(),
	birthday: z.string(),
	pictureURL: z.string(),
});

export type OAuthUser = z.infer<typeof oauthUserSchema>;
