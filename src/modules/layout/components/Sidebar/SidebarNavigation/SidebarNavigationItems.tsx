'use client';

import { match } from 'ts-pattern';

import { sidebarNavItems } from './SidebarNavigation.items';
import { SidebarNavigationLinkItem } from './SidebarNavigationItem/variants/SidebarNavigationLinkItem/SidebarNavigationLinkItem';
import { SidebarNavigationModalItem } from './SidebarNavigationItem/variants/SidebarNavigationModalItem';
import { SidebarNavigationSlidingBoxItem } from './SidebarNavigationItem/variants/SidebarNavigationSlidingBoxItem/SidebarNavigationSlidingBoxItem';

export const SidebarNavigationItems = () =>
	sidebarNavItems.map((navItem, i) =>
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
	);
