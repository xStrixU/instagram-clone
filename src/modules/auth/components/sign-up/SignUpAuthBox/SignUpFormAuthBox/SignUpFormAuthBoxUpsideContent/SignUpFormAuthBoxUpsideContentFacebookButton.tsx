import { useTranslations } from 'next-intl';

import { Button } from '../../../../ui/Button/Button';

import FacebookTransparentIcon from '@/modules/auth/assets/icons/facebook-transparent.svg';

export const SignUpFormAuthBoxUpsideContentFacebookButton = () => {
	const t = useTranslations('auth.SignUpAuthBox.form.upsideContent');

	return (
		<Button>
			<FacebookTransparentIcon aria-hidden className="mr-2" />
			{t('facebookLogin')}
		</Button>
	);
};
