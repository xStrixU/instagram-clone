import { SignUpConfirmationCodeAuthBoxFormDataInputs } from './SignUpConfirmationCodeAuthBoxFormDataInputs';
import { SignUpConfirmationCodeAuthBoxFormInput } from './SignUpConfirmationCodeAuthBoxFormInput';
import { SignUpConfirmationCodeAuthBoxFormSubmitButton } from './SignUpConfirmationCodeAuthBoxFormSubmitButton';
import { useSignUpConfirmationCodeAuthBoxForm } from './useSignUpConfirmationCodeAuthBoxForm';

export const SignUpConfirmationCodeAuthBoxForm = () => {
	const { register, isValid, signUpFormAction } =
		useSignUpConfirmationCodeAuthBoxForm();

	return (
		<form action={signUpFormAction} className="flex w-full flex-col gap-4">
			<SignUpConfirmationCodeAuthBoxFormDataInputs />
			<SignUpConfirmationCodeAuthBoxFormInput
				{...register('confirmationCode')}
			/>
			<SignUpConfirmationCodeAuthBoxFormSubmitButton disabled={!isValid} />
		</form>
	);
};
