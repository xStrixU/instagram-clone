import { SidebarNavigationUserProfileItemInner } from './SidebarNavigationUserProfileItemInner/SidebarNavigationUserProfileItemInner';
import { SidebarNavigationUserProfileItemSkeleton } from './SidebarNavigationUserProfileItemSkeleton';

import * as sessionsFetcher from '@/modules/api/sessions/sessions.fetcher';

export const SidebarNavigationUserProfileItem = async () => {
	const { user } = await sessionsFetcher.getCurrent();

	if (!user) {
		return null;
	}

	return <SidebarNavigationUserProfileItemInner user={user} />;
};

SidebarNavigationUserProfileItem.Skeleton =
	SidebarNavigationUserProfileItemSkeleton;
