import { SidebarMessages } from './Sidebar.messages';
import { SidebarStoreProvider } from './Sidebar.store';
import { SidebarLogo } from './SidebarLogo';
import { SidebarNavigation } from './SidebarNavigation/SidebarNavigation';
import { SidebarWrapper } from './SidebarNavigation/SidebarWrapper/SidebarWrapper';

export const Sidebar = () => (
	<SidebarMessages>
		<SidebarStoreProvider>
			<SidebarWrapper>
				<SidebarLogo />
				<SidebarNavigation />
			</SidebarWrapper>
		</SidebarStoreProvider>
	</SidebarMessages>
);
