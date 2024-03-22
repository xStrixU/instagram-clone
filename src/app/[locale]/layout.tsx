import { unstable_setRequestLocale } from 'next-intl/server';

import { locales } from '@/modules/i18n/i18n';

import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import type { LocaleParams } from '@/modules/i18n/types/i18n.types';

import '@/common/assets/styles/globals.css';

import '@total-typescript/ts-reset';

export const generateStaticParams = () => locales.map(locale => ({ locale }));

export const metadata: Metadata = {
	title: {
		template: '%s • Instagram',
		default: 'Instagram',
	},
};

type RootLayoutProps = Readonly<{
	params: LocaleParams;
	children: ReactNode;
}>;

const RootLayout = ({ params: { locale }, children }: RootLayoutProps) => {
	unstable_setRequestLocale(locale);

	return (
		<html lang={locale}>
			<body>{children}</body>
		</html>
	);
};

export default RootLayout;
