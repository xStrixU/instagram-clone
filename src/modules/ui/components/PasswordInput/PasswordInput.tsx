'use client';

import { forwardRef, useState } from 'react';

import { Input } from '../Input/Input';
import { PasswordInputTogglePasswordButton } from './PasswordInputTogglePasswordButton';

import type { ChangeEventHandler, ComponentProps } from 'react';

type PasswordInputProps = Readonly<{
	value: string;
	onChange: ChangeEventHandler<HTMLInputElement>;
}> &
	Omit<ComponentProps<typeof Input>, 'type' | 'rightSection'>;

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
	({ value, ...props }, ref) => {
		const [isPasswordShown, setIsPasswordShown] = useState(false);

		return (
			<Input
				type={isPasswordShown ? 'text' : 'password'}
				ref={ref}
				value={value}
				{...(value && {
					rightSection: (
						<PasswordInputTogglePasswordButton
							isShown={isPasswordShown}
							onToggle={setIsPasswordShown}
						/>
					),
				})}
				{...props}
			/>
		);
	},
);

PasswordInput.displayName = 'PasswordInput';
