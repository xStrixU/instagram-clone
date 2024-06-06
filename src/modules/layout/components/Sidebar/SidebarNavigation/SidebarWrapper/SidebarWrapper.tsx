'use client';

import { twMerge } from 'tailwind-merge';

import { useSidebarWrapper } from './useSidebarWrapper';

import type { ReactNode } from 'react';

type SidebarWrapperProps = Readonly<{
	children: ReactNode;
}>;

export const SidebarWrapper = ({ children }: SidebarWrapperProps) => {
	const { containerRef, isCollapsed } = useSidebarWrapper();

	return (
		<div
			ref={containerRef}
			className="fixed bottom-0 w-full sidebar-desktop:bottom-0 sidebar-desktop:top-0 sidebar-desktop:w-fit"
		>
			<aside
				className={twMerge(
					'relative z-50 h-full overflow-hidden border-t border-separator bg-primary transition-width duration-sidebar sidebar-desktop:border-r sidebar-desktop:border-t-0 sidebar-desktop:px-3 sidebar-desktop:pt-2',
					!isCollapsed &&
						'sidebar-desktop:w-sidebar-desktop sidebar-desktop-lg:w-sidebar-desktop-lg',
					isCollapsed && 'w-sidebar-desktop',
				)}
			>
				{children}
			</aside>
		</div>
	);
};
