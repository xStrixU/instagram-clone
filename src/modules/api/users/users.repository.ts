import { Prisma } from '@prisma/client';

import { prisma } from '../common/database/prisma';
import { EntityAlreadyExistsError } from '../common/errors/repositories/entity-already-exists-error';
import { EntityUnknownError } from '../common/errors/repositories/entity-unknown-error';

import type { User } from './users.types';

interface UserInput {
	fullName: string;
	username: string;
	email: string;
	password: string;
	birthday: Date;
	oauth?: {
		provider: string;
		accountId: string;
	};
}

export const create = async ({
	fullName,
	username,
	email,
	password,
	birthday,
	oauth,
}: UserInput): Promise<User> => {
	try {
		const user = await prisma.user.create({
			data: {
				fullName,
				username,
				email,
				password,
				birthday,
				...(oauth && {
					accounts: {
						create: {
							provider: oauth.provider,
							accountId: oauth.accountId,
						},
					},
				}),
			},
		});

		return user;
	} catch (err) {
		if (
			err instanceof Prisma.PrismaClientKnownRequestError &&
			err.code === 'P2002' &&
			err.meta
		) {
			const target = (err.meta.target as string[])[0];

			throw new EntityAlreadyExistsError(target);
		}

		throw new EntityUnknownError(err);
	}
};

export const getAll = (input: Partial<UserInput> = {}): Promise<User[]> =>
	prisma.user.findMany({ where: input });

export const findByLogin = (login: string): Promise<User | null> =>
	prisma.user.findFirst({
		where: {
			OR: [{ username: { equals: login } }, { email: { equals: login } }],
		},
	});

interface FindByOAuthAccountInput {
	provider: string;
	accountId: string;
}

export const findByOAuthAccount = ({
	provider,
	accountId,
}: FindByOAuthAccountInput): Promise<User | null> =>
	prisma.user.findFirst({
		where: {
			accounts: {
				some: {
					provider,
					accountId,
				},
			},
		},
	});
