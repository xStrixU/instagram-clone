import { useFormStatus } from 'react-dom';

import { SignUpAuthBoxNextButton } from '../../SignUpAuthBoxNextButton';

type SignUpConfirmationCodeAuthBoxFormSubmitButtonProps = Readonly<{
	disabled: boolean;
}>;

export const SignUpConfirmationCodeAuthBoxFormSubmitButton = ({
	disabled,
}: SignUpConfirmationCodeAuthBoxFormSubmitButtonProps) => {
	const { pending } = useFormStatus();

	return (
		<SignUpAuthBoxNextButton
			type="submit"
			disabled={disabled}
			isLoading={pending}
		/>
	);
};
