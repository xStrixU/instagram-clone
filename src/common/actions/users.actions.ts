'use server';

import * as usersService from '@/modules/api/users/users.service';

import type { GetAllUsersInput } from '@/modules/api/users/users.service';

export const getAll = (input: GetAllUsersInput) => usersService.getAll(input);
