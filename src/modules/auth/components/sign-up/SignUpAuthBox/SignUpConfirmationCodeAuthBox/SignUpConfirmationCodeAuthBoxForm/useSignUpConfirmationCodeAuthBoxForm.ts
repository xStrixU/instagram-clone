import { useSignUpAuthBoxContext } from '../../SignUpAuthBox.provider';
import { signUpConfirmationCodeAuthBoxFormSchema } from './SignUpConfirmationCodeAuthBoxForm.schema';

import { useZodForm } from '@/common/hooks/useZodForm';

export const useSignUpConfirmationCodeAuthBoxForm = () => {
	const {
		register,
		formState: { isValid },
	} = useZodForm(signUpConfirmationCodeAuthBoxFormSchema);
	const { signUpFormAction } = useSignUpAuthBoxContext();

	return { register, isValid, signUpFormAction };
};
