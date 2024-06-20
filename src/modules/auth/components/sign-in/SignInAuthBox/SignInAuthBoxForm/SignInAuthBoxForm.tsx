'use client';

import { Controller } from 'react-hook-form';

import { SignInAuthBoxFormSubmitButton } from './SignInAuthBoxFormSubmitButton';
import { useSignInAuthBoxForm } from './useSignInAuthBoxForm';

import { Input } from '@/modules/ui/components/Input/Input';
import { PasswordInput } from '@/modules/ui/components/PasswordInput/PasswordInput';

export const SignInAuthBoxForm = () => {
	const { register, control, isValid, signInFormAction, t } =
		useSignInAuthBoxForm();

	return (
		<form action={signInFormAction} className="flex w-full flex-col gap-1.5">
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
				<SignInAuthBoxFormSubmitButton disabled={!isValid} />
			</div>
		</form>
	);
};
