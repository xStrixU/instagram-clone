import { useTranslations } from 'next-intl';
import { useEffect } from 'react';

import { useSignUpOAuthAuthBoxContext } from '../SignUpOAuthAuthBox.provider';
import { signUpOAuthAuthBoxFormSchema } from './SignUpOAuthAuthBoxForm.schema';

import { useZodForm } from '@/common/hooks/useZodForm';
import { useSignUpFormServerValidation } from '@/modules/auth/hooks/useSignUpFormServerValidation';

import type { OAuthUser } from '@/modules/api/oauth/oauth.schemas';

interface UseSignUpOAuthAuthBoxFormInput {
	user: OAuthUser;
}

export const useSignUpOAuthAuthBoxForm = ({
	user,
}: UseSignUpOAuthAuthBoxFormInput) => {
	const {
		register,
		trigger,
		getValues,
		setValue,
		setError,
		clearErrors,
		control,
		formState: { dirtyFields, errors, isValid },
	} = useZodForm(signUpOAuthAuthBoxFormSchema, {
		mode: 'onChange',
		defaultValues: {
			password: '',
		},
	});
	const { validatedFields, isServerValidated, validateField } =
		useSignUpFormServerValidation({
			fields: ['username'],
			delay: 500,
			validateClient: trigger,
			getValue: field => getValues(field),
			onSuccess: field => clearErrors(field),
			onError: field => setError(field, { type: 'custom' }),
		});
	const { signUpOAuthFormAction } = useSignUpOAuthAuthBoxContext();
	const tForm = useTranslations('auth.sign-up.form');

	useEffect(() => {
		setValue('fullName', user.fullName, { shouldDirty: true });
	}, [setValue, user.fullName]);

	return {
		register,
		validateField,
		signUpOAuthFormAction,
		control,
		dirtyFields,
		errors,
		isValid,
		validatedFields,
		isServerValidated,
		tForm,
	};
};
