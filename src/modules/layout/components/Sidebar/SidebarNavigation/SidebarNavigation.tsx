import { Suspense } from 'react';

import { SidebarNavigationUserProfileItem } from './SidebarNavigationItem/variants/SidebarNavigationUserProfileItem/SidebarNavigationUserProfileItem';
import { SidebarNavigationItems } from './SidebarNavigationItems';

export const SidebarNavigation = () => (
	<nav>
		<ul className="flex justify-evenly sidebar-desktop:block sidebar-desktop:space-y-2">
			<SidebarNavigationItems />
			<li>
				<Suspense fallback={<SidebarNavigationUserProfileItem.Skeleton />}>
					<SidebarNavigationUserProfileItem />
				</Suspense>
			</li>
		</ul>
	</nav>
);
