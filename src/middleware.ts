import createMiddleware from 'next-intl/middleware';

import { locales } from './modules/i18n/i18n';

export default createMiddleware({
	locales,
	defaultLocale: 'en',
});

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
