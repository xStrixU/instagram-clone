export interface UserEntity {
	id: string;
	fullName: string;
	username: string;
	email: string;
	password: string;
	birthday: Date;
}

export interface User extends UserEntity {
	pictureURL: string;
}

export interface UserDto {
	id: string;
	fullName: string;
	username: string;
	birthday: Date;
	pictureURL: string;
}
