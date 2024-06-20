import ErrorCircleIcon from '@/modules/ui/assets/icons/error-circle.svg';
import SuccessCircleIcon from '@/modules/ui/assets/icons/success-circle.svg';

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
				<SuccessCircleIcon aria-hidden />
			) : (
				<ErrorCircleIcon aria-hidden />
			))}
		{rightSection}
	</div>
);
