import Image from 'next/image';

import { AuthBox } from '../../../common/AuthBox';
import { ReportUnlawfulContent } from '../../../common/ReportUnlawfulContent';
import { SignUpAuthBoxGoBackButton } from '../SignUpAuthBoxGoBackButton';
import { SignUpBirthdayAuthBoxForm } from './SignUpBirthdayAuthBoxForm/SignUpBirthdayAuthBoxForm';
import { SignUpBirthdayAuthBoxUpperContent } from './SignUpBirthdayAuthBoxUpperContent';

import birthdayImage from '@/modules/auth/assets/images/birthday.png';

import type { StepsProps } from '../SignUpAuthBox.steps';

export const SignUpBirthdayAuthBox = ({
	previousStep,
	nextStep,
}: StepsProps) => (
	<AuthBox className="flex flex-col gap-3 text-center text-sm">
		<Image
			src={birthdayImage}
			width={144}
			height={96}
			alt="Birthday"
			aria-hidden
		/>
		<SignUpBirthdayAuthBoxUpperContent />
		<SignUpBirthdayAuthBoxForm nextStep={nextStep} />
		<SignUpAuthBoxGoBackButton onClick={previousStep} />
		<ReportUnlawfulContent />
	</AuthBox>
);
