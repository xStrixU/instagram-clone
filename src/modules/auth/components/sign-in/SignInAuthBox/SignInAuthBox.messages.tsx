import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import type { ReactNode } from 'react';

type SignInAuthBoxMessagesProps = Readonly<{
	children: ReactNode;
}>;

export const SignInAuthBoxMessages = ({
	children,
}: SignInAuthBoxMessagesProps) => {
	const messages = useMessages();

	return (
		<NextIntlClientProvider
			messages={pick(
				messages,
				'auth.sign-in.SignInAuthBox.form',
				'auth.ui',
				'errors',
			)}
		>
			{children}
		</NextIntlClientProvider>
	);
};
