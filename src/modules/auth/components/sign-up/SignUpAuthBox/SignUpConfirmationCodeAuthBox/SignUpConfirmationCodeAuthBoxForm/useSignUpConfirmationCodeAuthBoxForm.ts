import { useSignUpAuthBoxContext } from '../../SignUpAuthBox.provider';
import { signUpConfirmationCodeAuthBoxFormSchema } from './SignUpConfirmationCodeAuthBoxForm.schema';

import { useZodForm } from '@/common/hooks/useZodForm';

export const useSignUpConfirmationCodeAuthBoxForm = () => {
	const {
		register,
		handleSubmit,
		formState: { isValid },
	} = useZodForm(signUpConfirmationCodeAuthBoxFormSchema);
	const { formData, birthDate } = useSignUpAuthBoxContext();

	const onSubmit = handleSubmit(({ code }) => {
		if (!formData || !birthDate) return;

		console.log({ formData, birthDate, code });
	});

	return { register, onSubmit, isValid };
};
