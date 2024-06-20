import { useSidebarContext } from '../../Sidebar.provider';

import { useEscapeClick } from '@/modules/ui/hooks/useEscapeClick';
import { useOutsideClick } from '@/modules/ui/hooks/useOutsideClick';

export const useSidebarWrapper = () => {
	const { containerRef, isCollapsed, setIsCollapsed, setSelectedItem } =
		useSidebarContext();

	const handleSlidingBoxClose = () => {
		setIsCollapsed(false);
		setSelectedItem(null);
	};

	useEscapeClick(handleSlidingBoxClose);
	useOutsideClick(handleSlidingBoxClose, [containerRef]);

	return { containerRef, isCollapsed };
};
