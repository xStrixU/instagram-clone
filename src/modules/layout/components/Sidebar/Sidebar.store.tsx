'use client';

import { useRef } from 'react';

import { createStoreContext } from '@/common/lib/createStoreContext';

import type { ReactNode, RefObject } from 'react';

interface SidebarState {
	containerRef: RefObject<HTMLDivElement>;
	isCollapsed: boolean;
	selectedItem: number | null;
	setIsCollapsed: (isExpanded: boolean) => void;
	setSelectedItem: (selectedItem: number | null) => void;
}

const [useCreateStore, SidebarStoreContextProvider, useSidebarStore] =
	createStoreContext<SidebarState>(({ initialProps, set }) => ({
		containerRef: { current: null },
		isCollapsed: false,
		selectedItem: null,
		setIsCollapsed: isCollapsed => set({ isCollapsed }),
		setSelectedItem: selectedItem => set({ selectedItem }),
		...initialProps,
	}));

type SidebarStoreProviderProps = Readonly<{
	children: ReactNode;
}>;

const SidebarStoreProvider = ({ children }: SidebarStoreProviderProps) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const store = useCreateStore({ containerRef });

	return (
		<SidebarStoreContextProvider value={store}>
			{children}
		</SidebarStoreContextProvider>
	);
};

export { SidebarStoreProvider, useSidebarStore };
