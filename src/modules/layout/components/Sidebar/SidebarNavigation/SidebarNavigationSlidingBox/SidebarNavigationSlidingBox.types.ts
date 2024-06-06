import type { SidebarNavigationSlidingBox } from './SidebarNavigationSlidingBox';
import type { ComponentProps, ComponentType } from 'react';

export type SidebarNavigationSlidingBoxVariantProps = Omit<
	ComponentProps<typeof SidebarNavigationSlidingBox>,
	'className' | 'children'
>;

export type SidebarNavigationSlidingBoxVariantComponent =
	ComponentType<SidebarNavigationSlidingBoxVariantProps>;
