import { useTranslations } from 'next-intl';

import { useSignUpAuthBoxStore } from '../../SignUpAuthBox.store';
import { SignUpConfirmationCodeAuthBoxUpperContentResendCodeButton } from './SignUpConfirmationCodeAuthBoxUpperContentResendCodeButton';

export const SignUpConfirmationCodeAuthBoxUpperContent = () => {
	const formData = useSignUpAuthBoxStore(state => state.formData);
	const t = useTranslations('auth.sign-up.SignUpAuthBox.confirmation-code');

	return (
		<>
			<h1 className="mt-2 font-semibold text-primary">{t('title')}</h1>
			<p className="text-center text-primary">
				{t.rich('content', {
					email: formData?.email,
					'resend-code': chunks => (
						<SignUpConfirmationCodeAuthBoxUpperContentResendCodeButton>
							{chunks}
						</SignUpConfirmationCodeAuthBoxUpperContentResendCodeButton>
					),
				})}
			</p>
		</>
	);
};
