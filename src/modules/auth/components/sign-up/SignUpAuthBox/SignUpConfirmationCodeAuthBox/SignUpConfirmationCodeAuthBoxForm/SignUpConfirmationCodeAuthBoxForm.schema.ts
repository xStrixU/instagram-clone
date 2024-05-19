import { z } from 'zod';

export const signUpConfirmationCodeAuthBoxFormSchema = z.object({
	confirmationCode: z.string().min(6),
});
