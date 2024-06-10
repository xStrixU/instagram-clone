import { SidebarNavigationItem } from '../../SidebarNavigationItem';

export const SidebarNavigationUserProfileItemSkeleton = () => (
	<SidebarNavigationItem label="profile">
		<button type="button" className="hover:cursor-not-allowed">
			<div className="h-6 w-6 animate-pulse rounded-full bg-neutral-300" />
			<SidebarNavigationItem.Label label="profile" />
		</button>
	</SidebarNavigationItem>
);
