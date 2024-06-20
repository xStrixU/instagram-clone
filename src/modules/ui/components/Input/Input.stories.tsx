import { Input } from './Input';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Auth/Input',
	component: Input,
	tags: ['autodocs'],
} satisfies Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
	args: {
		type: 'text',
		placeholder: 'Phone number, username, or email',
	},
};

export const WithRightSection: Story = {
	args: {
		type: 'text',
		placeholder: 'Lorem Ipsum',
		rightSection: <span className="font-semibold text-primary">Right</span>,
	},
};
