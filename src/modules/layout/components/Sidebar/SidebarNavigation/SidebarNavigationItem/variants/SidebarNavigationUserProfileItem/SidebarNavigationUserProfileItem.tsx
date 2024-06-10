import { SidebarNavigationUserProfileItemInner } from './SidebarNavigationUserProfileItemInner/SidebarNavigationUserProfileItemInner';
import { SidebarNavigationUserProfileItemSkeleton } from './SidebarNavigationUserProfileItemSkeleton';

import * as sessionsFetcher from '@/modules/api/sessions/sessions.fetcher';

const sleep = (ms: number) =>
	new Promise<void>(resolve => setTimeout(resolve, ms));

export const SidebarNavigationUserProfileItem = async () => {
	const { user } = await sessionsFetcher.getCurrent();

	await sleep(3000);

	if (!user) {
		return null;
	}

	return <SidebarNavigationUserProfileItemInner user={user} />;
};

SidebarNavigationUserProfileItem.Skeleton =
	SidebarNavigationUserProfileItemSkeleton;
