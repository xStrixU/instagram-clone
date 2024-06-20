import { Button } from './Button';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Auth/Button',
	component: Button,
	tags: ['autodocs'],
	args: {
		children: 'Button',
	},
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
