import * as argon2 from 'argon2';

export const hashPassword = (password: string) => argon2.hash(password);

export const comparePassword = (digest: string, password: string) =>
	argon2.verify(digest, password);
