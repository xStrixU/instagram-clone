import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { locales } from './features/i18n/i18n';
import { notAuthenticatedRoutes } from './modules/auth/lib/constants';
import { validateSession } from './modules/auth/utils/session.utils';

import type { NextRequest } from 'next/server';

const handleI18nRouting = createMiddleware({
	locales,
	defaultLocale: 'en',
});

export const middleware = async (request: NextRequest) => {
	const { nextUrl } = request;

	const i18nResponse = handleI18nRouting(request);
	const locale = i18nResponse.headers.get(
		'x-middleware-request-x-next-intl-locale',
	);

	const isSessionValid = await validateSession();
	const isNotAuthenticatedRoute = !!notAuthenticatedRoutes.find(route =>
		route.test(nextUrl.pathname),
	);

	if (isSessionValid && isNotAuthenticatedRoute) {
		return NextResponse.redirect(new URL(`${locale}`, nextUrl.origin));
	}

	if (!isSessionValid && !isNotAuthenticatedRoute) {
		return NextResponse.redirect(new URL(`/${locale}/sign-in`, nextUrl.origin));
	}

	return i18nResponse;
};

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
