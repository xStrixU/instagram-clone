import { useTranslations } from 'next-intl';

import { useSignUpAuthBoxContext } from '../../../SignUpAuthBox.provider';
import { useSignUpBirthdayAuthBoxFormBirthDate } from './useSignUpBirthdayAuthBoxFormBirthDate';

import type { FormEvent } from 'react';

interface UseSignUpBirthdayAuthBoxFormInput {
	nextStep: () => void;
}

export const useSignUpBirthdayAuthBoxForm = ({
	nextStep,
}: UseSignUpBirthdayAuthBoxFormInput) => {
	const { birthDate, dispatchBirthDate } =
		useSignUpBirthdayAuthBoxFormBirthDate();
	const { setBirthDate } = useSignUpAuthBoxContext();
	const t = useTranslations('auth.SignUpAuthBox.birthday');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setBirthDate(birthDate);
		nextStep();
	};

	return { birthDate, dispatchBirthDate, handleSubmit, t };
};
