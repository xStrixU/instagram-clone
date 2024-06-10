import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { Lucia } from 'lucia';

import { prisma } from '../common/database/prisma';
import { SESSION_COOKIE_NAME } from '../sessions/sessions.constants';

import { env } from '@/common/lib/env';

interface DatabaseUserAttributes {
	fullName: string;
	username: string;
	email: string;
	password: string;
	birthday: Date;
}

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
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
	getUserAttributes: attributes => attributes,
});
