import { unstable_setRequestLocale } from 'next-intl/server';

import type { ReactNode } from 'react';

import type { LocaleParams } from '@/features/i18n/types/i18n.types';

type AuthLayoutProps = Readonly<{
	params: LocaleParams;
	children: ReactNode;
}>;

const AuthLayout = ({ params: { locale }, children }: AuthLayoutProps) => {
	unstable_setRequestLocale(locale);

	return (
		<div className="fixed inset-0 overflow-y-auto">
			<main className="flex min-h-full flex-col items-center justify-center xs:py-2">
				{children}
			</main>
		</div>
	);
};

export default AuthLayout;
