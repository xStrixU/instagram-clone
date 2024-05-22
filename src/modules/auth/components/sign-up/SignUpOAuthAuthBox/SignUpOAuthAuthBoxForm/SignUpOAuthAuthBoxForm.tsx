import { Controller } from 'react-hook-form';

import { Input } from '../../../ui/Input/Input';
import { PasswordInput } from '../../../ui/PasswordInput/PasswordInput';
import { SignUpOAuthAuthBoxFormDataInputs } from './SignUpOAuthAuthBoxFormDataInputs';
import { SignUpOAuthAuthBoxFormSubmitButton } from './SignUpOAuthAuthBoxFormSubmitButton';
import { SignUpOAuthAuthBoxFormTermsAndPrivacy } from './SignUpOAuthAuthBoxFormTermsAndPrivacy';
import { useSignUpOAuthAuthBoxForm } from './useSignUpOAuthAuthBoxForm';

import type { OAuthProvider } from '@/modules/api/oauth/oauth.providers';
import type { OAuthUser } from '@/modules/api/oauth/oauth.schemas';

type SignUpOAuthAuthBoxFormProps = Readonly<{
	provider: OAuthProvider;
	user: OAuthUser;
}>;

export const SignUpOAuthAuthBoxForm = ({
	provider,
	user,
}: SignUpOAuthAuthBoxFormProps) => {
	const {
		register,
		validateField,
		signUpOAuthFormAction,
		control,
		dirtyFields,
		errors,
		isValid,
		validatedFields,
		isServerValidated,
		tForm,
	} = useSignUpOAuthAuthBoxForm({ user });

	return (
		<form
			action={signUpOAuthFormAction}
			className="flex w-full flex-col gap-1.5"
		>
			<SignUpOAuthAuthBoxFormDataInputs provider={provider} user={user} />
			<Input
				placeholder={tForm('fullName')}
				validate={dirtyFields.fullName}
				isValid={!errors.fullName}
				{...register('fullName')}
			/>
			<Input
				autoComplete="username"
				placeholder={tForm('username')}
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
						placeholder={tForm('password')}
						validate={dirtyFields.password}
						isValid={!errors.password}
						{...field}
					/>
				)}
			/>
			<SignUpOAuthAuthBoxFormTermsAndPrivacy />
			<div className="mt-2">
				<SignUpOAuthAuthBoxFormSubmitButton
					disabled={!isServerValidated || !isValid}
				/>
			</div>
		</form>
	);
};
