import { comparePassword } from '../users/utils/password.utils';
import { AuthenticationError } from './errors/authentication-error';

import * as usersService from '@/modules/api/users/users.service';

interface AuthenticateInput {
	login: string;
	password: string;
}

export const authenticate = async ({ login, password }: AuthenticateInput) => {
	const user = await usersService.findByLogin(login);

	if (!user || !(await comparePassword(user.password, password))) {
		throw new AuthenticationError();
	}

	return user;
};
