import ValidationErrorIcon from '@/modules/auth/assets/icons/validation-error.svg';
import ValidationSuccessIcon from '@/modules/auth/assets/icons/validation-success.svg';

import type { ReactNode } from 'react';

type InputRightSectionProps = Readonly<{
	validate?: boolean;
	isValid?: boolean;
	rightSection: ReactNode;
}>;

export const InputRightSection = ({
	validate,
	isValid,
	rightSection,
}: InputRightSectionProps) => (
	<div className="mx-2 flex items-center gap-1.5">
		{validate &&
			(isValid ? (
				<ValidationSuccessIcon aria-hidden />
			) : (
				<ValidationErrorIcon aria-hidden />
			))}
		{rightSection}
	</div>
);
