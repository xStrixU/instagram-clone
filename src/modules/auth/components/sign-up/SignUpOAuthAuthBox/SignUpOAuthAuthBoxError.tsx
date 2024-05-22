import { useTranslations } from 'next-intl';

import { useSignUpOAuthAuthBoxContext } from './SignUpOAuthAuthBox.provider';

export const SignUpOAuthAuthBoxError = () => {
	const { signUpOAuthState } = useSignUpOAuthAuthBoxContext();
	const t = useTranslations('errors');

	if (!signUpOAuthState?.error) {
		return null;
	}

	return (
		<p className="text-center text-sm text-error">
			{t(signUpOAuthState.error)}
		</p>
	);
};
