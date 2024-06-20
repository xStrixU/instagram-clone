import Link from 'next/link';
import { useTranslations } from 'next-intl';

import FacebookTransparentIcon from '@/modules/auth/assets/icons/facebook-transparent.svg';
import { Button } from '@/modules/ui/components/Button/Button';

export const SignUpFormAuthBoxUpsideContentFacebookButton = () => {
	const t = useTranslations('auth.sign-up.SignUpAuthBox.form.upsideContent');

	return (
		<Button asChild>
			<Link href="/api/auth/facebook">
				<FacebookTransparentIcon aria-hidden className="mr-2" />
				{t('facebookLogin')}
			</Link>
		</Button>
	);
};
