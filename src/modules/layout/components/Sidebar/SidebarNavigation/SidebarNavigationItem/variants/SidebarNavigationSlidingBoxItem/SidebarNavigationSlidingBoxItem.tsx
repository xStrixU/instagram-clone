import { twMerge } from 'tailwind-merge';

import { SidebarNavigationItem } from '../../SidebarNavigationItem';
import { useSidebarNavigationSlidingBoxItem } from './useSidebarNavigationSlidingBoxItem';

import type { SidebarNavigationSlidingBoxVariantComponent } from '../../../SidebarNavigationSlidingBox/SidebarNavigationSlidingBox.types';
import type { SidebarNavItemLabel } from '../../SidebarNavigationItem.types';

import type { SVGComponent } from '@/common/types/react.types';

type SidebarNavigationSlidingBoxItemProps = Readonly<{
	id: number;
	label: SidebarNavItemLabel;
	icon: SVGComponent;
	activeIcon: SVGComponent;
	target: SidebarNavigationSlidingBoxVariantComponent;
}>;

export const SidebarNavigationSlidingBoxItem = ({
	id,
	label,
	icon,
	activeIcon,
	target: SlidingBox,
}: SidebarNavigationSlidingBoxItemProps) => {
	const { slidingBoxId, isActive, handleButtonClick } =
		useSidebarNavigationSlidingBoxItem({ id });

	return (
		<>
			<SidebarNavigationItem label={label}>
				<button
					type="button"
					aria-expanded={isActive}
					aria-controls={slidingBoxId}
					onClick={handleButtonClick}
					className={twMerge(
						'hidden sidebar-desktop:flex',
						isActive && 'border border-gray',
					)}
				>
					<SidebarNavigationItem.Icon
						icon={icon}
						activeIcon={activeIcon}
						isActive={isActive}
					/>
					<SidebarNavigationItem.Label label={label} />
				</button>
			</SidebarNavigationItem>
			<SlidingBox id={slidingBoxId} label={label} isOpen={isActive} />
		</>
	);
};
