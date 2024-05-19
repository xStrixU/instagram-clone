import { useTranslations } from 'next-intl';

import { useSignUpAuthBoxContext } from '../../SignUpAuthBox.provider';

export const SignUpConfirmationCodeAuthBoxBottomContentError = () => {
	const { signUpState } = useSignUpAuthBoxContext();
	const t = useTranslations('errors');

	if (!signUpState?.error) {
		return null;
	}

	return (
		<p className="text-center text-sm text-error">{t(signUpState.error)}</p>
	);
};
