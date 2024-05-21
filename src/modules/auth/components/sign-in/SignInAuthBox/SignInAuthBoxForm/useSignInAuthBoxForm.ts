import { useTranslations } from 'next-intl';

import { useSignInAuthBoxContext } from '../SignInAuthBox.provider';
import { signInAuthBoxFormSchema } from './SignInAuthBoxForm.schema';

import { useZodForm } from '@/common/hooks/useZodForm';

export const useSignInAuthBoxForm = () => {
	const {
		register,
		control,
		formState: { isValid },
	} = useZodForm(signInAuthBoxFormSchema, {
		defaultValues: {
			password: '',
		},
	});
	const t = useTranslations('auth.sign-in.SignInAuthBox.form');
	const { signInFormAction } = useSignInAuthBoxContext();

	return { register, control, isValid, signInFormAction, t };
};
