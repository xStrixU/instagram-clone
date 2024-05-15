import { useTranslations } from 'next-intl';

import { signInAuthBoxFormSchema } from './SignInAuthBoxForm.schema';

import { useZodForm } from '@/common/hooks/useZodForm';

export const useSignInAuthBoxForm = () => {
	const {
		register,
		handleSubmit,
		control,
		formState: { isValid },
	} = useZodForm(signInAuthBoxFormSchema, {
		defaultValues: {
			password: '',
		},
	});
	const t = useTranslations('auth.sign-in.SignInAuthBox.form');

	const onSubmit = handleSubmit(data => {
		console.log({ data });
	});

	return { register, onSubmit, control, isValid, t };
};
