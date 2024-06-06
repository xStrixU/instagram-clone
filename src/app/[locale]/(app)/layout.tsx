import { Sidebar } from '@/modules/layout/components/Sidebar/Sidebar';

import type { ReactNode } from 'react';

const AppLayout = ({ children }: { readonly children: ReactNode }) => (
	<>
		<Sidebar />
		<main className="h-full pb-12 sidebar-desktop:pb-0 sidebar-desktop:pl-sidebar-desktop sidebar-desktop-lg:pl-sidebar-desktop-lg">
			{children}
		</main>
	</>
);

export default AppLayout;
