import { twJoin } from 'tailwind-merge';

import { SidebarNavigationItem } from '../../SidebarNavigationItem';
import { useSidebarNavigationLinkItem } from './useSidebarNavigationLinkItem';

import { Link } from '@/features/i18n/lib/i18n.navigation';

import type { SidebarNavItemLabel } from '../../SidebarNavigationItem.types';

import type { SVGComponent } from '@/common/types/react.types';

type SidebarNavigationLinkItemProps = Readonly<{
	href: string;
	exact?: boolean;
	label: SidebarNavItemLabel;
	icon: SVGComponent;
	activeIcon: SVGComponent;
}>;

export const SidebarNavigationLinkItem = ({
	href,
	exact = false,
	label,
	icon,
	activeIcon,
}: SidebarNavigationLinkItemProps) => {
	const { isActive } = useSidebarNavigationLinkItem({ exact, href });

	return (
		<SidebarNavigationItem label={label}>
			<Link
				href={href}
				className={twJoin(isActive && 'font-bold')}
				{...(isActive && { 'aria-current': 'page' })}
			>
				<SidebarNavigationItem.Icon
					icon={icon}
					activeIcon={activeIcon}
					isActive={isActive}
				/>
				<SidebarNavigationItem.Label label={label} />
			</Link>
		</SidebarNavigationItem>
	);
};
