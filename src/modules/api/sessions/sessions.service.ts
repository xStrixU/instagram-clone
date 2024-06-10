import { lucia } from '../auth/auth.config';
import { mapUserEntityToUser } from '../users/users.mapper';

import type { User } from '../users/users.types';
import type { Session } from './sessions.types';

export const create = (user: User): Promise<Session> =>
	lucia.createSession(user.id, {});

export const findById = async (
	id: string,
): Promise<
	{ session: Session; user: User } | { session: null; user: null }
> => {
	const { session, user } = await lucia.validateSession(id);

	if (!session) {
		return { session: null, user: null };
	}

	return {
		session,
		user: mapUserEntityToUser(user),
	};
};

export const deleteById = (id: string) => lucia.invalidateSession(id);
