import { useSidebarStore } from '../../../../Sidebar.store';

import { usePathname } from '@/features/i18n/lib/i18n.navigation';

interface UseSidebarNavigationLinkItemInput {
	exact: boolean;
	stayActive: boolean;
	href: string;
}

export const useSidebarNavigationLinkItem = ({
	exact,
	stayActive,
	href,
}: UseSidebarNavigationLinkItemInput) => {
	const pathname = usePathname();
	const selectedItem = useSidebarStore(state => state.selectedItem);

	const isActive =
		(stayActive || selectedItem === null) &&
		(exact ? pathname === href : pathname.startsWith(href));

	return { isActive };
};
