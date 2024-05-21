import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { Lucia } from 'lucia';

import { prisma } from '../common/database/prisma';
import { SESSION_COOKIE_NAME } from '../sessions/sessions.constants';

import { env } from '@/common/lib/env';

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
	}
}

const adapter = new PrismaAdapter(prisma.session, prisma.user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		name: SESSION_COOKIE_NAME,
		expires: false,
		attributes: {
			secure: env.NODE_ENV === 'production',
		},
	},
});
