import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import type { ReactNode } from 'react';

type SidebarMessagesProps = Readonly<{
	children: ReactNode;
}>;

export const SidebarMessages = ({ children }: SidebarMessagesProps) => {
	const messages = useMessages();

	return (
		<NextIntlClientProvider messages={pick(messages, 'layout.Sidebar')}>
			{children}
		</NextIntlClientProvider>
	);
};
