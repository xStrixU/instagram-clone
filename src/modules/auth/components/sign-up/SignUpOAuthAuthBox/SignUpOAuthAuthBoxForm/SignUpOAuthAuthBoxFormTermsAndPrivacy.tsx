import { useTranslations } from 'next-intl';

import { InfoText } from '../../../common/InfoText/InfoText';

export const SignUpOAuthAuthBoxFormTermsAndPrivacy = () => {
	const t = useTranslations('auth.sign-up.SignUpOAuthAuthBoxForm.form');

	return (
		<div className="mx-1.5 mt-2">
			<InfoText>
				{t.rich('termsAndPolicy', {
					terms: chunks => <InfoText.Link href="#">{chunks}</InfoText.Link>,
					privacyPolicy: chunks => (
						<InfoText.Link href="#">{chunks}</InfoText.Link>
					),
				})}
			</InfoText>
		</div>
	);
};
