import { SidebarNavigationNotificationsSlidingBox } from './SidebarNavigationSlidingBox/variants/SidebarNavigationNotificationsSlidingBox';
import { SidebarNavigationSearchSlidingBox } from './SidebarNavigationSlidingBox/variants/SidebarNavigationSearchSlidingBox';

import CreateIcon from '@/modules/layout/assets/svg/create.svg';
import HomeIcon from '@/modules/layout/assets/svg/home.svg';
import ActiveHomeIcon from '@/modules/layout/assets/svg/home-active.svg';
import MessagesIcon from '@/modules/layout/assets/svg/messages.svg';
import ActiveMessagesIcon from '@/modules/layout/assets/svg/messages-active.svg';
import NotificationsIcon from '@/modules/layout/assets/svg/notifications.svg';
import ActiveNotificationsIcon from '@/modules/layout/assets/svg/notifications-active.svg';
import SearchIcon from '@/modules/layout/assets/svg/search.svg';
import ActiveSearchIcon from '@/modules/layout/assets/svg/search-active.svg';

import type { SidebarNavigationLinkItem } from './SidebarNavigationItem/variants/SidebarNavigationLinkItem/SidebarNavigationLinkItem';
import type { SidebarNavigationModalItem } from './SidebarNavigationItem/variants/SidebarNavigationModalItem';
import type { SidebarNavigationSlidingBoxItem } from './SidebarNavigationItem/variants/SidebarNavigationSlidingBoxItem/SidebarNavigationSlidingBoxItem';
import type { ComponentProps } from 'react';

type LinkNavItem = ComponentProps<typeof SidebarNavigationLinkItem> & {
	type: 'link';
};

type ModalNavItem = ComponentProps<typeof SidebarNavigationModalItem> & {
	type: 'modal';
};

type SlidingBoxNavItem = Omit<
	ComponentProps<typeof SidebarNavigationSlidingBoxItem>,
	'id'
> & {
	type: 'sliding-box';
};

type NavItem = LinkNavItem | ModalNavItem | SlidingBoxNavItem;

export const sidebarNavItems: NavItem[] = [
	{
		type: 'link',
		label: 'home',
		href: '/',
		exact: true,
		icon: HomeIcon,
		activeIcon: ActiveHomeIcon,
	},
	{
		type: 'sliding-box',
		label: 'search',
		icon: SearchIcon,
		activeIcon: ActiveSearchIcon,
		target: SidebarNavigationSearchSlidingBox,
	},
	{
		type: 'link',
		label: 'messages',
		href: '/direct',
		icon: MessagesIcon,
		activeIcon: ActiveMessagesIcon,
	},
	{
		type: 'sliding-box',
		label: 'notifications',
		icon: NotificationsIcon,
		activeIcon: ActiveNotificationsIcon,
		target: SidebarNavigationNotificationsSlidingBox,
	},
	{
		type: 'modal',
		label: 'create',
		icon: CreateIcon,
	},
];
