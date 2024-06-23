'use client';

import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { useSidebarStore } from '../../Sidebar.store';

import type { SidebarNavItemLabel } from './SidebarNavigationItem.types';

type SidebarNavigationItemLabelProps = Readonly<{
	label: SidebarNavItemLabel;
}>;

export const SidebarNavigationItemLabel = ({
	label,
}: SidebarNavigationItemLabelProps) => {
	const isCollapsed = useSidebarStore(state => state.isCollapsed);
	const t = useTranslations('layout.Sidebar.items');

	return (
		<span
			className={twMerge(
				'hidden whitespace-nowrap',
				!isCollapsed && 'sidebar-desktop-lg:inline',
			)}
		>
			{t(label)}
		</span>
	);
};
