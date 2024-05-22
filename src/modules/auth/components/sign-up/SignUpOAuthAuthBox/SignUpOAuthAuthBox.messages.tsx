import pick from 'lodash/pick';
import { NextIntlClientProvider, useMessages } from 'next-intl';

import type { ReactNode } from 'react';

type SignUpOAuthAuthBoxMessagesProps = Readonly<{
	children: ReactNode;
}>;

export const SignUpOAuthAuthBoxMessages = ({
	children,
}: SignUpOAuthAuthBoxMessagesProps) => {
	const messages = useMessages();

	return (
		<NextIntlClientProvider
			messages={pick(
				messages,
				'auth.sign-up.form',
				'auth.sign-up.SignUpOAuthAuthBoxForm',
				'auth.ui',
				'errors',
			)}
		>
			{children}
		</NextIntlClientProvider>
	);
};
