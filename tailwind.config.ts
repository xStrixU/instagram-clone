import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				primary: 'rgb(var(--background-primary) / <alpha-value>)',
				secondary: 'rgb(var(--background-secondary) / <alpha-value>)',
			},
			borderColor: {
				stroke: {
					DEFAULT: 'rgb(var(--stroke) / <alpha-value>)',
					focus: 'rgb(var(--stroke-focus) / <alpha-value>)',
				},
			},
			colors: {
				facebook: 'rgb(var(--facebook) / <alpha-value>)',
				link: 'rgb(var(--link) / <alpha-value>)',
				separator: 'rgb(var(--separator) / <alpha-value>)',
				button: {
					primary: {
						DEFAULT: 'rgb(var(--button-primary) / <alpha-value>)',
						active: 'rgb(var(--button-primary-active) / <alpha-value>)',
						hover: 'rgb(var(--button-primary-hover) / <alpha-value>)',
					},
					secondary: 'rgb(var(--button-secondary) / <alpha-value>)',
				},
			},
			textColor: {
				primary: 'rgb(var(--text-primary) / <alpha-value>)',
				secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
			},
			fontFamily: {
				sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
			},
			screens: {
				xs: '450px',
			},
		},
	},
} satisfies Config;
