import { unstable_setRequestLocale } from 'next-intl/server';

import { locales } from '@/features/i18n/i18n';

import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';

import type { LocaleParams } from '@/features/i18n/types/i18n.types';

import '@/common/assets/styles/globals.css';

import '@total-typescript/ts-reset';

export const generateStaticParams = () => locales.map(locale => ({ locale }));

export const metadata: Metadata = {
	title: {
		template: '%s • Instagram',
		default: 'Instagram',
	},
};

export const viewport: Viewport = {
	userScalable: false,
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
