import { Controller } from 'react-hook-form';

import { SignUpAuthBoxNextButton } from '../../SignUpAuthBoxNextButton';
import { useSignUpFormAuthBoxForm } from './hooks/useSignUpFormAuthBoxForm';
import { SignUpFormAuthBoxFormBottomContent } from './SignUpFormAuthBoxFormBottomContent';

import { Input } from '@/modules/auth/components/ui/Input/Input';
import { PasswordInput } from '@/modules/auth/components/ui/PasswordInput/PasswordInput';

import type { StepsProps } from '../../SignUpAuthBox.steps';

type SignUpFormAuthBoxFormProps = Pick<StepsProps, 'nextStep'>;

export const SignUpFormAuthBoxForm = ({
	nextStep,
}: SignUpFormAuthBoxFormProps) => {
	const {
		register,
		onSubmit,
		validateField,
		control,
		dirtyFields,
		errors,
		isValid,
		validatedFields,
		isServerValidated,
		t,
	} = useSignUpFormAuthBoxForm({ nextStep });

	return (
		<form onSubmit={onSubmit} className="flex w-full flex-col gap-1.5">
			<Input
				autoComplete="email"
				placeholder={t('email')}
				validate={validatedFields.email}
				isValid={!errors.email}
				{...register('email', {
					onChange: () => validateField('email'),
				})}
			/>
			<Input
				placeholder={t('fullName')}
				validate={dirtyFields.fullName}
				isValid={!errors.fullName}
				{...register('fullName')}
			/>
			<Input
				autoComplete="username"
				placeholder={t('username')}
				validate={validatedFields.username}
				isValid={!errors.username}
				{...register('username', {
					onChange: () => validateField('username'),
				})}
			/>
			<Controller
				name="password"
				control={control}
				render={({ field }) => (
					<PasswordInput
						autoComplete="new-password"
						placeholder={t('password')}
						validate={dirtyFields.password}
						isValid={!errors.password}
						{...field}
					/>
				)}
			/>
			<SignUpFormAuthBoxFormBottomContent />
			<div className="mt-2">
				<SignUpAuthBoxNextButton
					type="submit"
					disabled={!isServerValidated || !isValid}
				/>
			</div>
		</form>
	);
};
