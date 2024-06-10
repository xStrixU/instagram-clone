import { useSidebarContext } from '../../../../Sidebar.provider';

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
	const { selectedItem } = useSidebarContext();

	const isActive =
		(stayActive || selectedItem === null) &&
		(exact ? pathname === href : pathname.startsWith(href));

	return { isActive };
};
