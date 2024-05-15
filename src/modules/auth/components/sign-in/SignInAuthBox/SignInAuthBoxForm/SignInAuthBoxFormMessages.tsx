import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import type { ReactNode } from 'react';

type SignInAuthBoxFormMessagesProps = Readonly<{
	children: ReactNode;
}>;

export const SignInAuthBoxFormMessages = ({
	children,
}: SignInAuthBoxFormMessagesProps) => {
	const messages = useMessages();

	return (
		<NextIntlClientProvider
			messages={pick(messages, 'auth.sign-in.SignInAuthBox.form', 'auth.ui')}
		>
			{children}
		</NextIntlClientProvider>
	);
};
