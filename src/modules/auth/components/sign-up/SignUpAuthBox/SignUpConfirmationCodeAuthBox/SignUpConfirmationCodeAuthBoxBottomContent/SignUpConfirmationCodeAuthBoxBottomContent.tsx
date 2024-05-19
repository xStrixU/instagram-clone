import { SignUpConfirmationCodeAuthBoxBottomContentError } from './SignUpConfirmationCodeAuthBoxBottomContentError';

import { ReportUnlawfulContent } from '@/modules/auth/components/common/ReportUnlawfulContent';

export const SignUpConfirmationCodeAuthBoxBottomContent = () => (
	<>
		<SignUpConfirmationCodeAuthBoxBottomContentError />
		<ReportUnlawfulContent />
	</>
);
