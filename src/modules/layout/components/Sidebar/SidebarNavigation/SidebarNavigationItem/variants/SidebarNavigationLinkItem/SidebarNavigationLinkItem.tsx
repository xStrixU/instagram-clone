import { twJoin } from 'tailwind-merge';

import { SidebarNavigationItem } from '../../SidebarNavigationItem';
import { useSidebarNavigationLinkItem } from './useSidebarNavigationLinkItem';

import { Link } from '@/features/i18n/lib/i18n.navigation';

import type { SidebarNavItemLabel } from '../../SidebarNavigationItem.types';
import type { ReactNode } from 'react';

import type { SVGComponent } from '@/common/types/react.types';

type SidebarNavigationLinkItemIconProps = Readonly<
	| {
			icon: SVGComponent;
			activeIcon: SVGComponent;
			customIcon?: undefined;
	  }
	| {
			icon?: undefined;
			activeIcon?: undefined;
			customIcon: (isActive: boolean) => ReactNode;
	  }
>;

type SidebarNavigationLinkItemCommonProps = Readonly<{
	href: string;
	exact?: boolean;
	stayActive?: boolean;
	label: SidebarNavItemLabel;
}>;

type SidebarNavigationLinkItemProps = SidebarNavigationLinkItemCommonProps &
	SidebarNavigationLinkItemIconProps;

export const SidebarNavigationLinkItem = ({
	href,
	exact = false,
	stayActive = false,
	label,
	icon,
	activeIcon,
	customIcon,
}: SidebarNavigationLinkItemProps) => {
	const { isActive } = useSidebarNavigationLinkItem({
		exact,
		stayActive,
		href,
	});

	return (
		<SidebarNavigationItem label={label}>
			<Link
				href={href}
				className={twJoin(isActive && 'font-bold')}
				{...(isActive && { 'aria-current': 'page' })}
			>
				{customIcon ? (
					customIcon(isActive)
				) : (
					<SidebarNavigationItem.Icon
						icon={icon}
						activeIcon={activeIcon}
						isActive={isActive}
					/>
				)}

				<SidebarNavigationItem.Label label={label} />
			</Link>
		</SidebarNavigationItem>
	);
};
