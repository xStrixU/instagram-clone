import { useTranslations } from 'next-intl';

import { SidebarNavigationItemIcon } from './SidebarNavigationItemIcon';
import { SidebarNavigationItemLabel } from './SidebarNavigationItemLabel';

import { Slot } from '@/modules/ui/components/Slot';

import type { SidebarNavItemLabel } from './SidebarNavigationItem.types';
import type { ReactNode } from 'react';

type SidebarNavigationItemProps = Readonly<{
	label: SidebarNavItemLabel;
	children: ReactNode;
}>;

export const SidebarNavigationItem = ({
	label,
	children,
}: SidebarNavigationItemProps) => {
	const t = useTranslations('layout.Sidebar.items');

	return (
		<Slot
			aria-label={t(label)}
			className="group flex h-12 w-full items-center gap-4 rounded-lg px-3 text-primary transition-colors duration-300 active:opacity-50 sidebar-desktop:hover:bg-hover-overlay"
		>
			{children}
		</Slot>
	);
};

SidebarNavigationItem.Icon = SidebarNavigationItemIcon;
SidebarNavigationItem.Label = SidebarNavigationItemLabel;
