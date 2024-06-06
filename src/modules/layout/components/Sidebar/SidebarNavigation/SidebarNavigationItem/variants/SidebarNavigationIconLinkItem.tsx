import { SidebarNavigationItem } from '../SidebarNavigationItem';

import { Link } from '@/features/i18n/lib/i18n.navigation';

import type { SidebarNavItemLabel } from '../SidebarNavigationItem.types';

import type { SVGComponent } from '@/common/types/react.types';

type SidebarNavigationIconLinkItemProps = Readonly<{
	href: string;
	label: SidebarNavItemLabel;
	icon: SVGComponent;
}>;

export const SidebarNavigationIconLinkItem = ({
	href,
	label,
	icon,
}: SidebarNavigationIconLinkItemProps) => (
	<SidebarNavigationItem label={label}>
		<Link href={href}>
			<SidebarNavigationItem.Icon icon={icon} />
		</Link>
	</SidebarNavigationItem>
);
