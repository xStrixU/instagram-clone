'use server';

import { redirect } from 'next/navigation';

import { AuthError } from '../lib/errors';
import { signUpPayloadSchema } from './actions.payloads';

import { CommonError } from '@/common/lib/errors';
import { validateActionPayload } from '@/common/lib/validateActionPayload';
import { UserAlreadyExistsError } from '@/modules/api/users/errors/user-already-exists-error';
import * as usersService from '@/modules/api/users/users.service';

export const signUp = async (_prevState: unknown, formData: FormData) => {
	const payload = validateActionPayload(signUpPayloadSchema, formData);

	if (!payload) {
		return { error: CommonError.Payload };
	}

	try {
		// TODO: validate confirmationCode

		await usersService.create(payload);
	} catch (err) {
		if (err instanceof UserAlreadyExistsError) {
			switch (err.target) {
				case 'email':
					return { error: AuthError.SignUpEmail };
				case 'username':
					return { error: AuthError.SignUpUsername };
			}
		}

		return { error: CommonError.Unexpected };
	}

	redirect('/sign-in');
};
