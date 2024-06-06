import { SidebarNavigationItem } from '../SidebarNavigationItem';

import type { SidebarNavItemLabel } from '../SidebarNavigationItem.types';

import type { SVGComponent } from '@/common/types/react.types';

type SidebarNavigationModalItemProps = Readonly<{
	label: SidebarNavItemLabel;
	icon: SVGComponent;
}>;

export const SidebarNavigationModalItem = ({
	label,
	icon,
}: SidebarNavigationModalItemProps) => (
	<SidebarNavigationItem label={label}>
		<button type="button">
			<SidebarNavigationItem.Icon icon={icon} />
			<SidebarNavigationItem.Label label={label} />
		</button>
	</SidebarNavigationItem>
);
