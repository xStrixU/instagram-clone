'use client';

import { SidebarNavigationLinkItem } from '../../SidebarNavigationLinkItem/SidebarNavigationLinkItem';
import { SidebarNavigationUserProfileItemInnerIcon } from './SidebarNavigationUserProfileItemInnerIcon';

import type { UserDto } from '@/modules/api/users/users.types';

type SidebarNavigationUserProfileItemInnerProps = Readonly<{
	user: UserDto;
}>;

export const SidebarNavigationUserProfileItemInner = ({
	user,
}: SidebarNavigationUserProfileItemInnerProps) => (
	<SidebarNavigationLinkItem
		label="profile"
		href={`/${user.username}`}
		customIcon={isActive => (
			<SidebarNavigationUserProfileItemInnerIcon
				user={user}
				isActive={isActive}
			/>
		)}
		stayActive
	/>
);
