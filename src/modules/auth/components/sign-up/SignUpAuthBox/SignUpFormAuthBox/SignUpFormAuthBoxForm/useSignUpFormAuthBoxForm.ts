import { useTranslations } from 'next-intl';
import { useShallow } from 'zustand/react/shallow';

import { useSignUpAuthBoxStore } from '../../SignUpAuthBox.store';
import { signUpFormAuthBoxFormSchema } from './SignUpFormAuthBoxForm.schema';

import { useZodForm } from '@/common/hooks/useZodForm';
import { useSignUpFormServerValidation } from '@/modules/auth/hooks/useSignUpFormServerValidation';

interface UseSignUpFormAuthBoxFormInput {
	nextStep: () => void;
}

export const useSignUpFormAuthBoxForm = ({
	nextStep,
}: UseSignUpFormAuthBoxFormInput) => {
	const [formData, setFormData] = useSignUpAuthBoxStore(
		useShallow(state => [state.formData, state.setFormData]),
	);
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
		useSignUpFormServerValidation({
			fields: ['username', 'email'],
			delay: 500,
			validateClient: trigger,
			getValue: field => getValues(field),
			onSuccess: field => clearErrors(field),
			onError: field => setError(field, { type: 'custom' }),
		});
	const t = useTranslations('auth.sign-up.form');

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
