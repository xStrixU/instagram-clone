import { useTranslations } from 'next-intl';

import { useSignUpAuthBoxContext } from '../../SignUpAuthBox.provider';
import { signUpFormAuthBoxFormSchema } from './SignUpFormAuthBoxForm.schema';

import { useZodForm } from '@/common/hooks/useZodForm';

interface UseSignUpFormAuthBoxFormInput {
	nextStep: () => void;
}

export const useSignUpFormAuthBoxForm = ({
	nextStep,
}: UseSignUpFormAuthBoxFormInput) => {
	const { formData, setFormData } = useSignUpAuthBoxContext();
	const {
		register,
		handleSubmit,
		control,
		formState: { dirtyFields, errors, isValid },
	} = useZodForm(signUpFormAuthBoxFormSchema, {
		mode: 'onChange',
		defaultValues: {
			password: '',
			...formData,
		},
	});
	const t = useTranslations('auth.SignUpAuthBox.form.form');

	const onSubmit = handleSubmit(data => {
		setFormData(data);
		nextStep();
	});

	return { register, onSubmit, control, dirtyFields, errors, isValid, t };
};
