import { cookies } from 'next/headers';
import { cache } from 'react';

import { SESSION_COOKIE_NAME } from './sessions.constants';
import * as sessionsService from './sessions.service';

import type { User } from '../users/users.types';
import type { Session } from './sessions.types';

export const getCurrent = cache(
	async (): Promise<
		{ session: Session; user: User } | { session: null; user: null }
	> => {
		const sessionId = cookies().get(SESSION_COOKIE_NAME)?.value ?? null;

		if (!sessionId) {
			return { session: null, user: null };
		}

		const { session, user } = await sessionsService.findById(sessionId);

		if (!session || !user) {
			return { session: null, user: null };
		}

		return { session, user };
	},
);
