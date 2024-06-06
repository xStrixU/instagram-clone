import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			backgroundColor: {
				'hover-overlay': 'var(--hover-overlay)',
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
				error: 'rgb(var(--error) / <alpha-value>)',
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
				gray: {
					DEFAULT: '#dbdbdb',
				},
			},
			textColor: {
				primary: 'rgb(var(--text-primary) / <alpha-value>)',
				secondary: 'rgb(var(--text-secondary) / <alpha-value>)',
			},
			animation: {
				loading: 'loading .8s infinite steps(8, end)',
			},
			boxShadow: {
				'sidebar-sliding-box': '4px 0 24px rgba(0, 0, 0, 0.15)',
			},
			fontFamily: {
				sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
			},
			keyframes: {
				loading: {
					'0%': { transform: 'rotate(180deg)' },
					'100%': { transform: 'rotate(540deg)' },
				},
			},
			padding: ({ theme }) => ({
				...theme('width'),
			}),
			screens: {
				xs: '450px',
				'sidebar-desktop': '768px',
				'sidebar-desktop-lg': '1264px',
			},
			transitionDuration: {
				sidebar: '400ms',
			},
			transitionProperty: {
				width: 'width',
			},
			width: {
				'sidebar-desktop': '4.5rem',
				'sidebar-desktop-lg': '15.25rem',
				'sidebar-sliding-box': '24.8rem',
			},
		},
	},
} satisfies Config;
