import { cookies, headers } from 'next/headers';

import { getBaseUrl } from '@/common/lib/getBaseUrl';
import {
	SESSION_COOKIE_NAME,
	SESSION_MAX_AGE,
} from '@/modules/api/sessions/sessions.constants';

import type { Session } from '@/modules/api/sessions/sessions.types';

export const createSessionCookie = (session: Session) => {
	cookies().set(SESSION_COOKIE_NAME, session.id, {
		path: '/',
		httpOnly: true,
		secure: true,
		sameSite: 'lax',
		maxAge: SESSION_MAX_AGE,
	});
};

export const validateSession = async () => {
	const headersList = headers();

	try {
		const response = await fetch(`${getBaseUrl()}/api/sessions/me`, {
			headers: {
				cookie: headersList.get('cookie') ?? '',
			},
		});

		return response.ok;
	} catch (err) {
		return false;
	}
};
