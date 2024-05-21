import { z } from 'zod';
import { zfd } from 'zod-form-data';

export const signInPayloadSchema = zfd.formData({
	login: zfd.text(),
	password: zfd.text(),
});

export const signUpPayloadSchema = zfd.formData({
	confirmationCode: zfd.text(),
	fullName: zfd.text(z.string().min(1)),
	username: zfd.text(z.string().min(1)),
	email: zfd.text(z.string().email()),
	password: zfd.text(z.string().min(7)),
	birthday: z.coerce.date(),
});
