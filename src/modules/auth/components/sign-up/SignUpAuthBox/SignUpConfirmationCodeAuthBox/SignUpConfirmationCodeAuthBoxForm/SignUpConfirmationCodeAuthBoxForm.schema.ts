import { z } from 'zod';

export const signUpConfirmationCodeAuthBoxFormSchema = z.object({
	code: z.string().min(6),
});
