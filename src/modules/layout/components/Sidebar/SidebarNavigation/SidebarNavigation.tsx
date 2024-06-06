'use client';

import { match } from 'ts-pattern';

import { sidebarNavItems } from './SidebarNavigation.items';
import { SidebarNavigationLinkItem } from './SidebarNavigationItem/variants/SidebarNavigationLinkItem/SidebarNavigationLinkItem';
import { SidebarNavigationModalItem } from './SidebarNavigationItem/variants/SidebarNavigationModalItem';
import { SidebarNavigationSlidingBoxItem } from './SidebarNavigationItem/variants/SidebarNavigationSlidingBoxItem/SidebarNavigationSlidingBoxItem';

export const SidebarNavigation = () => (
	<nav>
		<ul className="flex justify-evenly sidebar-desktop:block sidebar-desktop:space-y-2">
			{sidebarNavItems.map((navItem, i) =>
				match(navItem)
					.with({ type: 'link' }, item => (
						<li key={item.label}>
							<SidebarNavigationLinkItem {...item} />
						</li>
					))
					.with({ type: 'modal' }, item => (
						<li key={item.label}>
							<SidebarNavigationModalItem {...item} />
						</li>
					))
					.with({ type: 'sliding-box' }, item => (
						<li key={item.label}>
							<SidebarNavigationSlidingBoxItem id={i} {...item} />
						</li>
					))
					.exhaustive(),
			)}
		</ul>
	</nav>
);
