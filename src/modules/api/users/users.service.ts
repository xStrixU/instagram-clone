import { uploadFileFromLocal } from '../common/database/file-storage';
import { EntityAlreadyExistsError } from '../common/errors/repositories/entity-already-exists-error';
import { UnknownError } from '../common/errors/unknown-error';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { UserUnknownError } from './errors/user-unknown-error';
import { USER_DEFAULT_PROFILE_PICTURE_PATH } from './users.constants';
import { mapUserEntityToUser } from './users.mapper';
import * as usersRepository from './users.repository';
import { createUserPictureName } from './users.utils';
import { hashPassword } from './utils/password.utils';

import * as oauthService from '@/modules/api/oauth/oauth.service';

import type { OAuthProvider } from '../oauth/oauth.providers';
import type { User } from './users.types';

interface UserInput {
	fullName: string;
	username: string;
	email: string;
	password: string;
	birthday: Date;
	oauth?: {
		provider: OAuthProvider;
		accountId: string;
	};
}

export const create = async ({
	username,
	email,
	password,
	oauth,
	...input
}: UserInput): Promise<User> => {
	const hashedPassword = await hashPassword(password);

	try {
		const userEntity = await usersRepository.create({
			username: username.toLowerCase(),
			email: email.toLowerCase(),
			password: hashedPassword,
			oauth,
			...input,
		});
		const user = mapUserEntityToUser(userEntity);

		if (!oauth) {
			await resetProfilePicture(user);
		} else {
			await oauthService.persistUserPicture({
				accountId: oauth.accountId,
				userId: user.id,
			});
		}

		return user;
	} catch (err) {
		if (
			err instanceof EntityAlreadyExistsError &&
			(err.target === 'username' || err.target === 'email')
		) {
			throw new UserAlreadyExistsError(err.target);
		}

		throw new UserUnknownError(err);
	}
};

export type GetAllUsersInput = Partial<UserInput>;

export const getAll = async (input: GetAllUsersInput): Promise<User[]> => {
	const users = await usersRepository.getAll(input);

	return users.map(mapUserEntityToUser);
};

export const findByLogin = async (login: string): Promise<User | null> => {
	const user = await usersRepository.findByLogin(login);

	return user && mapUserEntityToUser(user);
};

interface FindByOAuthAccountInput {
	provider: OAuthProvider;
	accountId: string;
}

export const findByOAuthAccount = async (
	input: FindByOAuthAccountInput,
): Promise<User | null> => {
	const user = await usersRepository.findByOAuthAccount(input);

	return user && mapUserEntityToUser(user);
};

export const resetProfilePicture = async (user: User) => {
	try {
		await uploadFileFromLocal({
			path: USER_DEFAULT_PROFILE_PICTURE_PATH,
			name: createUserPictureName(user.id),
		});
	} catch (err) {
		throw new UnknownError(err);
	}
};
