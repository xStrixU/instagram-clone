import { SidebarMessages } from './Sidebar.messages';
import { SidebarProvider } from './Sidebar.provider';
import { SidebarLogo } from './SidebarLogo';
import { SidebarNavigation } from './SidebarNavigation/SidebarNavigation';
import { SidebarWrapper } from './SidebarNavigation/SidebarWrapper/SidebarWrapper';

export const Sidebar = () => (
	<SidebarMessages>
		<SidebarProvider>
			<SidebarWrapper>
				<SidebarLogo />
				<SidebarNavigation />
			</SidebarWrapper>
		</SidebarProvider>
	</SidebarMessages>
);
