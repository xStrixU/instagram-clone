import { createThumbnailURL } from '../common/utils/thumbnail.utils';
import { createUserPictureName } from './users.utils';

import type { User, UserDto, UserEntity } from './users.types';

export const mapUserEntityToUser = (user: UserEntity): User => {
	const pictureURL = createThumbnailURL(createUserPictureName(user.id));

	return {
		pictureURL,
		...user,
	};
};

export const mapUserToUserDto = ({
	id,
	fullName,
	username,
	birthday,
	pictureURL,
}: User): UserDto => ({
	id,
	fullName,
	username,
	birthday,
	pictureURL,
});
