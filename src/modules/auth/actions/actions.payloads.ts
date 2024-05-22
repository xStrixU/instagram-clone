import { z } from 'zod';
import { zfd } from 'zod-form-data';

import { oauthProviders } from '@/modules/api/oauth/oauth.providers';

export const signInPayloadSchema = zfd.formData({
	login: zfd.text(),
	password: zfd.text(),
});

const signUpPayloadBaseSchema = z.object({
	fullName: zfd.text(z.string().min(1)),
	username: zfd.text(z.string().min(1)),
	email: zfd.text(z.string().email()),
	password: zfd.text(z.string().min(7)),
	birthday: z.coerce.date(),
});

export const signUpPayloadSchema = zfd.formData(
	signUpPayloadBaseSchema.extend({
		confirmationCode: zfd.text(),
	}),
);

export const signUpOAuthPayloadSchema = zfd.formData(
	signUpPayloadBaseSchema.extend({
		provider: zfd.text(z.enum(oauthProviders)),
		accountId: zfd.text(z.string().min(1)),
	}),
);
