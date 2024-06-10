import { fileURLToPath } from 'node:url';

import createJiti from 'jiti';
import createNextIntlPlugin from 'next-intl/plugin';

const jiti = createJiti(fileURLToPath(import.meta.url));
const withNextIntl = createNextIntlPlugin('./src/features/i18n/i18n.ts');

const { env } = jiti('./src/common/lib/env.ts');

const thumbnailURL = new URL(env.THUMBNAIL_ENDPOINT);

/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		ppr: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: thumbnailURL.protocol.slice(0, -1),
				hostname: thumbnailURL.hostname,
			},
		],
	},
	webpack: config => {
		const fileLoaderRule = config.module.rules.find(rule =>
			rule.test?.test?.('.svg'),
		);

		config.module.rules.push(
			{
				...fileLoaderRule,
				test: /\.svg$/i,
				resourceQuery: /url/,
			},
			{
				test: /\.svg$/i,
				issuer: fileLoaderRule.issuer,
				resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
				use: ['@svgr/webpack'],
			},
		);

		fileLoaderRule.exclude = /\.svg$/i;

		return config;
	},
};

export default withNextIntl(nextConfig);
