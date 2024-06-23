'use client';

import { Transition } from '@headlessui/react';
import { useTranslations } from 'next-intl';
import { createPortal } from 'react-dom';
import { twMerge } from 'tailwind-merge';

import { useSidebarStore } from '../../Sidebar.store';

import type { SidebarNavItemLabel } from '../SidebarNavigationItem/SidebarNavigationItem.types';
import type { ReactNode } from 'react';

type SidebarNavigationSlidingBoxProps = Readonly<{
	id: string;
	label: SidebarNavItemLabel;
	isOpen: boolean;
	className?: string;
	children: ReactNode;
}>;

export const SidebarNavigationSlidingBox = ({
	id,
	label,
	isOpen,
	className,
	children,
}: SidebarNavigationSlidingBoxProps) => {
	const containerRef = useSidebarStore(state => state.containerRef);
	const t = useTranslations('layout.Sidebar.items');

	if (!containerRef.current) {
		return null;
	}

	return createPortal(
		<Transition
			appear
			show={isOpen}
			enter="duration-sidebar"
			enterFrom="translate-x-0"
			enterTo="translate-x-full"
			leave="duration-sidebar"
			leaveFrom="translate-x-full"
			leaveTo="-translate-x-4"
		>
			<div
				id={id}
				role="region"
				aria-label={t(label)}
				className={twMerge(
					'absolute right-0 top-0 z-40 h-full w-sidebar-sliding-box rounded-r-2xl border-r border-separator bg-primary shadow-sidebar-sliding-box',
					className,
				)}
			>
				{children}
			</div>
		</Transition>,
		containerRef.current,
	);
};
