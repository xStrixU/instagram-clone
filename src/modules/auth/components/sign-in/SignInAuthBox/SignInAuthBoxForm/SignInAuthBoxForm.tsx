'use client';

import { Controller } from 'react-hook-form';

import { useSignInAuthBoxForm } from './useSignInAuthBoxForm';

import { Button } from '@/modules/auth/components/ui/Button/Button';
import { Input } from '@/modules/auth/components/ui/Input/Input';
import { PasswordInput } from '@/modules/auth/components/ui/PasswordInput/PasswordInput';

export const SignInAuthBoxForm = () => {
	const { register, onSubmit, control, isValid, t } = useSignInAuthBoxForm();

	return (
		<form onSubmit={onSubmit} className="flex w-full flex-col gap-1.5">
			<Input
				autoComplete="username"
				placeholder={t('login')}
				{...register('login')}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field }) => (
					<PasswordInput
						autoComplete="current-password"
						placeholder={t('password')}
						{...field}
					/>
				)}
			/>
			<div className="mt-2">
				<Button type="submit" disabled={!isValid}>
					{t('submit')}
				</Button>
			</div>
		</form>
	);
};
