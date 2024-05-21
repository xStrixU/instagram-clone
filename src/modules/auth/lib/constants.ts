import { pathToRegexp } from 'path-to-regexp';

export const notAuthenticatedRoutes = [
	pathToRegexp('/:locale?/sign-in'),
	pathToRegexp('/:locale?/sign-up'),
];
