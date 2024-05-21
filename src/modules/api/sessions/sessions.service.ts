import { lucia } from '../auth/auth.config';

import type { User } from '../users/users.types';
import type { Session } from './sessions.types';

export const create = (user: User): Promise<Session> =>
	lucia.createSession(user.id, {});

export const findById = async (id: string): Promise<Session | null> => {
	const { session } = await lucia.validateSession(id);

	if (!session) {
		return null;
	}

	return session;
};

export const deleteById = (id: string) => lucia.invalidateSession(id);
