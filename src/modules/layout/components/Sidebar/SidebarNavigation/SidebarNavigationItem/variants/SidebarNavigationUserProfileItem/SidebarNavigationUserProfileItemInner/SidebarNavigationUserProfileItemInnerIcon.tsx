import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

import type { UserDto } from '@/modules/api/users/users.types';

type SidebarNavigationUserProfileItemInnerIconProps = Readonly<{
	user: UserDto;
	isActive: boolean;
}>;

export const SidebarNavigationUserProfileItemInnerIcon = ({
	user,
	isActive,
}: SidebarNavigationUserProfileItemInnerIconProps) => (
	<Image
		src={user.pictureURL}
		alt={user.fullName}
		width={24}
		height={24}
		className={twMerge(
			'h-6 w-6 shrink-0 rounded-3xl transition-transform duration-200 group-hover:scale-105',
			isActive && 'outline outline-2 outline-text-primary',
		)}
	/>
);
