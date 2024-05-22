import Link from 'next/link';
import { useTranslations } from 'next-intl';

import FacebookIcon from '@/modules/auth/assets/icons/facebook.svg';

export const SignInAuthBoxBottomContentFacebookLink = () => {
	const t = useTranslations('auth.sign-in.SignInAuthBox.bottomContent');

	return (
		<Link
			href="/api/auth/facebook"
			className="flex items-center gap-2 text-sm font-semibold text-facebook active:opacity-70"
		>
			<FacebookIcon aria-hidden />
			{t('facebookLogin')}
		</Link>
	);
};
