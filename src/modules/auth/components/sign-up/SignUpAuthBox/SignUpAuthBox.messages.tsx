import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import type { ReactNode } from 'react';

type SignUpAuthBoxMessagesProps = Readonly<{
	children: ReactNode;
}>;

export const SignUpAuthBoxMessages = ({
	children,
}: SignUpAuthBoxMessagesProps) => {
	const messages = useMessages();

	return (
		<NextIntlClientProvider
			messages={pick(
				messages,
				'auth.common',
				'auth.sign-up.SignUpAuthBox',
				'auth.ui',
				'errors',
			)}
		>
			{children}
		</NextIntlClientProvider>
	);
};
