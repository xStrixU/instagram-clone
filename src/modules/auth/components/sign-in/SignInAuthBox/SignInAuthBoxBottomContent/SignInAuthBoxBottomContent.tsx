import { useTranslations } from 'next-intl';

import { InfoText } from '../../../common/InfoText/InfoText';
import { ReportUnlawfulContent } from '../../../common/ReportUnlawfulContent';
import { SignInAuthBoxBottomContentFacebookButton } from './SignInAuthBoxBottomContentFacebookButton';

export const SignInAuthBoxBottomContent = () => {
	const t = useTranslations('auth.sign-in.SignInAuthBox.bottomContent');

	return (
		<div className="flex flex-col items-center gap-5">
			<SignInAuthBoxBottomContentFacebookButton />
			<InfoText.Link href="#">{t('forgotPassword')}</InfoText.Link>
			<ReportUnlawfulContent />
		</div>
	);
};
