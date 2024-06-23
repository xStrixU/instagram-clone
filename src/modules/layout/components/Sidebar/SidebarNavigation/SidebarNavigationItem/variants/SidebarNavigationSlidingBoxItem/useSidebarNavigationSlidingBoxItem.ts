import { useId } from 'react';
import { useShallow } from 'zustand/react/shallow';

import { useSidebarStore } from '../../../../Sidebar.store';

interface UseSidebarNavigationSlidingBoxItemInput {
	id: number;
}

export const useSidebarNavigationSlidingBoxItem = ({
	id,
}: UseSidebarNavigationSlidingBoxItemInput) => {
	const slidingBoxId = useId();
	const [selectedItem, setIsCollapsed, setSelectedItem] = useSidebarStore(
		useShallow(state => [
			state.selectedItem,
			state.setIsCollapsed,
			state.setSelectedItem,
		]),
	);

	const isActive = selectedItem === id;

	const handleButtonClick = () => {
		setIsCollapsed(!isActive);
		setSelectedItem(!isActive ? id : null);
	};

	return { slidingBoxId, isActive, handleButtonClick };
};
