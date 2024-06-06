'use client';

import { useRef, useState } from 'react';

import { createSafeContext } from '@/common/lib/createSafeContext';

import type { ReactNode, RefObject } from 'react';

interface SidebarContextValue {
	containerRef: RefObject<HTMLDivElement>;
	isCollapsed: boolean;
	selectedItem: number | null;
	setIsCollapsed: (isExpanded: boolean) => void;
	setSelectedItem: (selectedItem: number | null) => void;
}

const [useSidebarContext, SidebarContextProvider] =
	createSafeContext<SidebarContextValue>();

type SidebarProviderProps = Readonly<{
	children: ReactNode;
}>;

const SidebarProvider = ({ children }: SidebarProviderProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const [isCollapsed, setIsCollapsed] = useState(false);
	const [selectedItem, setSelectedItem] = useState<number | null>(null);

	return (
		<SidebarContextProvider
			value={{
				containerRef,
				isCollapsed,
				selectedItem,
				setIsCollapsed,
				setSelectedItem,
			}}
		>
			{children}
		</SidebarContextProvider>
	);
};

export { SidebarProvider, useSidebarContext };
