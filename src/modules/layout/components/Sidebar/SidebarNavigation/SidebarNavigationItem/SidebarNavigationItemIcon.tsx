import type { SVGComponent } from '@/common/types/react.types';

type SidebarNavigationItemIconCommonProps = Readonly<{
	icon: SVGComponent;
}>;

type SidebarNavigationItemIconActiveProps = Readonly<
	| {
			isActive: boolean;
			activeIcon: SVGComponent;
	  }
	| {
			isActive?: undefined;
			activeIcon?: undefined;
	  }
>;

type SidebarNavigationItemIconProps = SidebarNavigationItemIconCommonProps &
	SidebarNavigationItemIconActiveProps;

export const SidebarNavigationItemIcon = ({
	icon: Icon,
	activeIcon: ActiveIcon,
	isActive,
}: SidebarNavigationItemIconProps) => {
	const Component = isActive ? ActiveIcon : Icon;

	return (
		<Component
			aria-hidden
			className="shrink-0 transition-transform duration-200 group-hover:scale-105"
		/>
	);
};
