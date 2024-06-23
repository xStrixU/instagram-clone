import { useShallow } from 'zustand/react/shallow';

import { useSidebarStore } from '../../Sidebar.store';

import { useEscapeClick } from '@/modules/ui/hooks/useEscapeClick';
import { useOutsideClick } from '@/modules/ui/hooks/useOutsideClick';

export const useSidebarWrapper = () => {
	const [containerRef, isCollapsed, setIsCollapsed, setSelectedItem] =
		useSidebarStore(
			useShallow(state => [
				state.containerRef,
				state.isCollapsed,
				state.setIsCollapsed,
				state.setSelectedItem,
			]),
		);

	const handleSlidingBoxClose = () => {
		setIsCollapsed(false);
		setSelectedItem(null);
	};

	useEscapeClick(handleSlidingBoxClose);
	useOutsideClick(handleSlidingBoxClose, [containerRef]);

	return { containerRef, isCollapsed };
};
