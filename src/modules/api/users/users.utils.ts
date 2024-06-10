import { USER_PROFILE_PICTURE_S3_PREFIX } from './users.constants';

import type { User } from './users.types';

export const createUserPictureName = (userId: User['id']) =>
	`${USER_PROFILE_PICTURE_S3_PREFIX}${userId}`;
