import { AlternativeAuthDivider } from '../../../common/AlternativeAuthDivider';
import { AuthBox } from '../../../common/AuthBox';
import { ReportUnlawfulContent } from '../../../common/ReportUnlawfulContent';
import { SignUpFormAuthBoxForm } from './SignUpFormAuthBoxForm/SignUpFormAuthBoxForm';
import { SignUpFormAuthBoxUpsideContent } from './SignUpFormAuthBoxUpsideContent/SignUpFormAuthBoxUpsideContent';

import Logo from '@/common/assets/svg/logo.svg';

import type { StepsProps } from '../SignUpAuthBox.steps';

type SignUpFormAuthBoxProps = Omit<StepsProps, 'previousStep'>;

export const SignUpFormAuthBox = ({ nextStep }: SignUpFormAuthBoxProps) => (
	<AuthBox>
		<Logo aria-hidden className="mb-3 mt-5 w-44 text-primary" />
		<SignUpFormAuthBoxUpsideContent />
		<div className="my-4 w-full">
			<AlternativeAuthDivider />
		</div>
		<SignUpFormAuthBoxForm nextStep={nextStep} />
		<div className="mt-7 w-full">
			<ReportUnlawfulContent />
		</div>
	</AuthBox>
);
