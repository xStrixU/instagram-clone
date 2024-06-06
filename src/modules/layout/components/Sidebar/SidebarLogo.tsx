'use client';

import { twMerge } from 'tailwind-merge';

import { useSidebarContext } from './Sidebar.provider';
import { SidebarNavigationIconLinkItem } from './SidebarNavigation/SidebarNavigationItem/variants/SidebarNavigationIconLinkItem';

import Logo from '@/common/assets/svg/logo.svg';
import MarkLogo from '@/common/assets/svg/mark-logo.svg';
import { Link } from '@/features/i18n/lib/i18n.navigation';

export const SidebarLogo = () => {
	const { isCollapsed } = useSidebarContext();

	return (
		<div
			className={twMerge(
				'hidden h-24 pt-3 sidebar-desktop:block',
				!isCollapsed && 'sidebar-desktop-lg:pt-6',
			)}
		>
			<div className={twMerge(!isCollapsed && 'sidebar-desktop-lg:hidden')}>
				<SidebarNavigationIconLinkItem
					href="/"
					label="instagram"
					icon={MarkLogo}
				/>
			</div>
			<Link
				aria-label="Instagram"
				href="/"
				className={twMerge(
					'hidden',
					!isCollapsed && 'sidebar-desktop-lg:block',
				)}
			>
				<Logo aria-hidden className="h-7 px-3" />
			</Link>
		</div>
	);
};
