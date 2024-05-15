import { useTranslations } from 'next-intl';

import { SignUpFormAuthBoxUpsideContentFacebookButton } from './SignUpFormAuthBoxUpsideContentFacebookButton';

export const SignUpFormAuthBoxUpsideContent = () => {
	const t = useTranslations('auth.sign-up.SignUpAuthBox.form.upsideContent');

	return (
		<div className="flex flex-col gap-4">
			<h1 className="text-center font-semibold text-secondary">{t('title')}</h1>
			<SignUpFormAuthBoxUpsideContentFacebookButton />
		</div>
	);
};
