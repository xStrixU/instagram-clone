import { useTranslations } from 'next-intl';

import { InfoText } from '@/modules/auth/components/common/InfoText/InfoText';

export const SignUpFormAuthBoxFormBottomContent = () => {
	const t = useTranslations(
		'auth.sign-up.SignUpAuthBox.form.form.bottomContent',
	);

	return (
		<div className="mt-2 flex flex-col gap-4">
			<InfoText>
				{t.rich('contactInformation', {
					link: chunks => <InfoText.Link href="#">{chunks}</InfoText.Link>,
				})}
			</InfoText>
			<InfoText>
				{t.rich('termsAndPolicy', {
					terms: chunks => <InfoText.Link href="#">{chunks}</InfoText.Link>,
					privacyPolicy: chunks => (
						<InfoText.Link href="#">{chunks}</InfoText.Link>
					),
					cookiesPolicy: chunks => (
						<InfoText.Link href="#">{chunks}</InfoText.Link>
					),
				})}
			</InfoText>
		</div>
	);
};
