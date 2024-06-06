import { SidebarNavigationSlidingBox } from '../SidebarNavigationSlidingBox';

import type { SidebarNavigationSlidingBoxVariantProps } from '../SidebarNavigationSlidingBox.types';

export const SidebarNavigationSearchSlidingBox = (
	props: SidebarNavigationSlidingBoxVariantProps,
) => (
	<SidebarNavigationSlidingBox {...props}>
		<p>Search</p>
	</SidebarNavigationSlidingBox>
);
