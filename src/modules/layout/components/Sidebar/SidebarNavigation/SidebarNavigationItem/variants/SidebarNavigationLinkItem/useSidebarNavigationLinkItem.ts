import { useSidebarContext } from '../../../../Sidebar.provider';

import { usePathname } from '@/features/i18n/lib/i18n.navigation';

interface UseSidebarNavigationLinkItemInput {
	exact: boolean;
	href: string;
}

export const useSidebarNavigationLinkItem = ({
	exact,
	href,
}: UseSidebarNavigationLinkItemInput) => {
	const pathname = usePathname();
	const { selectedItem } = useSidebarContext();

	const isActive =
		selectedItem === null &&
		(exact ? pathname === href : pathname.startsWith(href));

	return { isActive };
};
