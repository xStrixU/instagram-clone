import { z } from 'zod';

export type SignUpAuthBoxFormSchema = z.infer<
	typeof signUpFormAuthBoxFormSchema
>;

export const signUpFormAuthBoxFormSchema = z.object({
	email: z.string().email(),
	fullName: z.string().min(1),
	username: z.string().min(1),
	password: z.string().min(7),
});
