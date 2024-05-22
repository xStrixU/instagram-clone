export const oauthProviders = ['facebook'] as const;

export type OAuthProvider = (typeof oauthProviders)[number];

export const isOAuthProvider = (provider: unknown): provider is OAuthProvider =>
	typeof provider === 'string' && oauthProviders.includes(provider);
