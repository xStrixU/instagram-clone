'use client';

import { useTranslations } from 'next-intl';

import { useSignInAuthBoxContext } from '../SignInAuthBox.provider';

export const SignInAuthBoxBottomContentError = () => {
	const { signInState } = useSignInAuthBoxContext();
	const t = useTranslations('errors');

	if (!signInState?.error) {
		return null;
	}

	return (
		<p className="text-center text-sm text-error">{t(signInState.error)}</p>
	);
};
