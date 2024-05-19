import { useTranslations } from 'next-intl';

import { useSignUpAuthBoxContext } from '../../../SignUpAuthBox.provider';
import { signUpFormAuthBoxFormSchema } from '../SignUpFormAuthBoxForm.schema';
import { useSignUpFormAuthBoxFormServerValidation } from './useSignUpFormAuthBoxFormServerValidation';

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
		trigger,
		getValues,
		setError,
		clearErrors,
		control,
		formState: { dirtyFields, errors, isValid },
	} = useZodForm(signUpFormAuthBoxFormSchema, {
		mode: 'onChange',
		defaultValues: {
			password: '',
			...formData,
		},
	});
	const { validatedFields, isServerValidated, validateField } =
		useSignUpFormAuthBoxFormServerValidation({
			validateClient: trigger,
			getValue: field => getValues(field),
			onSuccess: field => clearErrors(field),
			onError: field => setError(field, { type: 'custom' }),
		});
	const t = useTranslations('auth.sign-up.SignUpAuthBox.form.form');

	const onSubmit = handleSubmit(data => {
		setFormData(data);
		nextStep();
	});

	return {
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
	};
};
