import { SignUpAuthBoxNextButton } from '../../SignUpAuthBoxNextButton';
import { useSignUpBirthdayAuthBoxForm } from './hooks/useSignUpBirthdayAuthBoxForm';
import { SignUpBirthdayAuthBoxFormSelects } from './SignUpBirthdayAuthBoxFormSelects/SignUpBirthdayAuthBoxFormSelects';

import { InfoText } from '@/modules/auth/components/common/InfoText/InfoText';

import type { StepsProps } from '../../SignUpAuthBox.steps';

type SignUpBirthdayAuthBoxFormProps = Pick<StepsProps, 'nextStep'>;

export const SignUpBirthdayAuthBoxForm = ({
	nextStep,
}: SignUpBirthdayAuthBoxFormProps) => {
	const { birthDate, dispatchBirthDate, handleSubmit, t } =
		useSignUpBirthdayAuthBoxForm({
			nextStep,
		});

	return (
		<form
			onSubmit={handleSubmit}
			className="flex w-full flex-col items-center gap-3"
		>
			<SignUpBirthdayAuthBoxFormSelects
				birthDate={birthDate}
				dispatchBirthDate={dispatchBirthDate}
			/>
			<InfoText>{t('useOwnBirthday')}</InfoText>
			<SignUpAuthBoxNextButton type="submit" />
		</form>
	);
};
