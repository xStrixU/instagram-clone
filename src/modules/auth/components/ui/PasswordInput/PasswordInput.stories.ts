import { PasswordInput } from './PasswordInput';

import type { Meta, StoryObj } from '@storybook/react';

export default {
	title: 'Auth/PasswordInput',
	component: PasswordInput,
	tags: ['autodocs'],
} satisfies Meta<typeof PasswordInput>;

type Story = StoryObj<typeof PasswordInput>;

export const Default: Story = {};
