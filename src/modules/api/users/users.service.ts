import { EntityAlreadyExistsError } from '../common/errors/repositories/entity-already-exists-error';
import { UserAlreadyExistsError } from './errors/user-already-exists-error';
import { UserUnknownError } from './errors/user-unknown-error';
import * as usersRepository from './users.repository';
import { hashPassword } from './utils/password.utils';

interface UserInput {
	fullName: string;
	username: string;
	email: string;
	password: string;
	birthday: Date;
}

export const create = async ({
	username,
	email,
	password,
	...input
}: UserInput) => {
	const hashedPassword = await hashPassword(password);

	try {
		const user = await usersRepository.create({
			username: username.toLowerCase(),
			email: email.toLowerCase(),
			password: hashedPassword,
			...input,
		});

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

export const getAll = (input: GetAllUsersInput) =>
	usersRepository.getAll(input);

export const findByLogin = (login: string) =>
	usersRepository.findByLogin(login);
