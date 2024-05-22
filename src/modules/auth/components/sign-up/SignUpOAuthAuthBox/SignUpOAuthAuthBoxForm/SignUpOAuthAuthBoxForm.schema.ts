import { z } from 'zod';

export const signUpOAuthAuthBoxFormSchema = z.object({
	fullName: z.string().min(1),
	username: z.string().min(1),
	password: z.string().min(7),
});
