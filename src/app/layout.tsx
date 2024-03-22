import type { Metadata } from 'next';
import type { ReactNode } from 'react';

import '@/common/assets/styles/globals.css';

export const metadata: Metadata = {
	title: {
		template: '%s • Instagram',
		default: 'Instagram',
	},
};

const RootLayout = ({ children }: { readonly children: ReactNode }) => (
	<html lang="en">
		<body>{children}</body>
	</html>
);

export default RootLayout;
