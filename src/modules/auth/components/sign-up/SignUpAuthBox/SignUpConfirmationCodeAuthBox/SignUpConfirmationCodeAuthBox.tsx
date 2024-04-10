import Image from 'next/image';

import { AuthBox } from '../../../common/AuthBox';
import { ReportUnlawfulContent } from '../../../common/ReportUnlawfulContent';
import { SignUpAuthBoxGoBackButton } from '../SignUpAuthBoxGoBackButton';
import { SignUpConfirmationCodeAuthBoxForm } from './SignUpConfirmationCodeAuthBoxForm/SignUpConfirmationCodeAuthBoxForm';
import { SignUpConfirmationCodeAuthBoxUpperContent } from './SignUpConfirmationCodeAuthBoxUpperContent/SignUpConfirmationCodeAuthBoxUpperContent';

import confirmationCodeImage from '@/modules/auth/assets/images/confirmation-code.png';

import type { StepsProps } from '../SignUpAuthBox.steps';

type SignUpConfirmationCodeAuthBoxProps = Omit<StepsProps, 'nextStep'>;

export const SignUpConfirmationCodeAuthBox = ({
	previousStep,
}: SignUpConfirmationCodeAuthBoxProps) => (
	<AuthBox className="flex flex-col gap-3 text-sm">
		<Image
			src={confirmationCodeImage}
			width={90}
			height={64}
			alt="Confirmation code"
			aria-hidden
		/>
		<SignUpConfirmationCodeAuthBoxUpperContent />
		<SignUpConfirmationCodeAuthBoxForm />
		<SignUpAuthBoxGoBackButton onClick={previousStep} />
		<ReportUnlawfulContent />
	</AuthBox>
);
