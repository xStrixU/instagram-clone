import { useTranslations } from 'next-intl';

import FacebookIcon from '@/modules/auth/assets/icons/facebook.svg';

export const SignInAuthBoxBottomContentFacebookButton = () => {
	const t = useTranslations('auth.SignInAuthBox.bottomContent');

	return (
		<button
			type="button"
			className="flex items-center gap-2 text-sm font-semibold text-facebook active:opacity-70"
		>
			<FacebookIcon aria-hidden />
			{t('facebookLogin')}
		</button>
	);
};
