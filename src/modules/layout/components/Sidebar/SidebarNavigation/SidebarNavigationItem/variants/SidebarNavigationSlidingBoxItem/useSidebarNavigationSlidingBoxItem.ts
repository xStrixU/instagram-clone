import { useId } from 'react';

import { useSidebarContext } from '../../../../Sidebar.provider';

interface UseSidebarNavigationSlidingBoxItemInput {
	id: number;
}

export const useSidebarNavigationSlidingBoxItem = ({
	id,
}: UseSidebarNavigationSlidingBoxItemInput) => {
	const { selectedItem, setIsCollapsed, setSelectedItem } = useSidebarContext();
	const slidingBoxId = useId();

	const isActive = selectedItem === id;

	const handleButtonClick = () => {
		setIsCollapsed(!isActive);
		setSelectedItem(!isActive ? id : null);
	};

	return { slidingBoxId, isActive, handleButtonClick };
};
