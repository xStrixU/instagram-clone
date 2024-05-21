'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { AuthError } from '../lib/errors';
import { createSessionCookie } from '../utils/session.utils';
import { signInPayloadSchema, signUpPayloadSchema } from './actions.payloads';

import { CommonError } from '@/common/lib/errors';
import { validateActionPayload } from '@/common/lib/validateActionPayload';
import * as authService from '@/modules/api/auth/auth.service';
import { AuthenticationError } from '@/modules/api/auth/errors/authentication-error';
import { SESSION_COOKIE_NAME } from '@/modules/api/sessions/sessions.constants';
import * as sessionsService from '@/modules/api/sessions/sessions.service';
import { UserAlreadyExistsError } from '@/modules/api/users/errors/user-already-exists-error';
import * as usersService from '@/modules/api/users/users.service';

export const signIn = async (_prevState: unknown, formData: FormData) => {
	const payload = validateActionPayload(signInPayloadSchema, formData);

	if (!payload) {
		return { error: CommonError.Payload };
	}

	try {
		const user = await authService.authenticate(payload);
		const session = await sessionsService.create(user);

		createSessionCookie(session);
	} catch (err) {
		if (err instanceof AuthenticationError) {
			return { error: AuthError.SignInCredentials };
		}

		return { error: CommonError.Unexpected };
	}

	redirect('/');
};

export const signUp = async (_prevState: unknown, formData: FormData) => {
	const payload = validateActionPayload(signUpPayloadSchema, formData);

	if (!payload) {
		return { error: CommonError.Payload };
	}

	try {
		// TODO: validate confirmationCode

		const user = await usersService.create(payload);
		const session = await sessionsService.create(user);

		createSessionCookie(session);
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

	redirect('/');
};

export const signOut = async () => {
	const cookieStore = cookies();
	const sessionId = cookieStore.get(SESSION_COOKIE_NAME)?.value ?? null;

	if (!sessionId) {
		return;
	}

	await sessionsService.deleteById(sessionId);
	cookieStore.delete(SESSION_COOKIE_NAME);

	redirect('/sign-in');
};
