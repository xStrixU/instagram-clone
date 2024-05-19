import * as argon2 from 'argon2';

export const hashPassword = (password: string) => argon2.hash(password);
