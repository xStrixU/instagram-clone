import { useTranslations } from 'next-intl';

import { InfoText } from './InfoText/InfoText';

export const ReportUnlawfulContent = () => {
	const t = useTranslations('auth.common.ReportUnlawfulContent');

	return (
		<InfoText>
			{t.rich('content', {
				link: chunks => (
					<InfoText.Link href="#" underline>
						{chunks}
					</InfoText.Link>
				),
			})}
		</InfoText>
	);
};
