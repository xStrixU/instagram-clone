import { Select } from './Select';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Auth/Select',
	component: Select,
	tags: ['autodocs'],
} satisfies Meta<typeof Select>;

type Story = StoryObj<typeof Select>;

export const Default: Story = {};
