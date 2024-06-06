import { useTranslations } from 'next-intl';
import { twMerge } from 'tailwind-merge';

import { useSidebarContext } from '../../Sidebar.provider';

import type { SidebarNavItemLabel } from './SidebarNavigationItem.types';

type SidebarNavigationItemLabelProps = Readonly<{
	label: SidebarNavItemLabel;
}>;

export const SidebarNavigationItemLabel = ({
	label,
}: SidebarNavigationItemLabelProps) => {
	const { isCollapsed } = useSidebarContext();
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
