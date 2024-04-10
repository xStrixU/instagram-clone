import { SignUpAuthBoxNextButton } from '../../SignUpAuthBoxNextButton';
import { SignUpConfirmationCodeAuthBoxFormInput } from './SignUpConfirmationCodeAuthBoxFormInput';
import { useSignUpConfirmationCodeAuthBoxForm } from './useSignUpConfirmationCodeAuthBoxForm';

export const SignUpConfirmationCodeAuthBoxForm = () => {
	const { register, onSubmit, isValid } =
		useSignUpConfirmationCodeAuthBoxForm();

	return (
		<form onSubmit={onSubmit} className="flex w-full flex-col gap-4">
			<SignUpConfirmationCodeAuthBoxFormInput {...register('code')} />
			<SignUpAuthBoxNextButton type="submit" disabled={!isValid} />
		</form>
	);
};
