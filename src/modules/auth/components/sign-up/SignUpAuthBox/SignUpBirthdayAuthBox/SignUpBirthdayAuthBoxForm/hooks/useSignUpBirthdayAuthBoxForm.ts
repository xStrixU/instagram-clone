import { useTranslations } from 'next-intl';

import { useSignUpAuthBoxStore } from '../../../SignUpAuthBox.store';
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
	const setBirthDate = useSignUpAuthBoxStore(state => state.setBirthDate);
	const t = useTranslations('auth.sign-up.SignUpAuthBox.birthday');

	const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setBirthDate(birthDate);
		nextStep();
	};

	return { birthDate, dispatchBirthDate, handleSubmit, t };
};
