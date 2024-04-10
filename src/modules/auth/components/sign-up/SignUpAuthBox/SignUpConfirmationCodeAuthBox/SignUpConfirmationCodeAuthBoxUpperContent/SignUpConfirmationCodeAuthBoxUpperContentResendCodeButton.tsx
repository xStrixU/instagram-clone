import type { ReactNode } from 'react';

type SignUpConfirmationCodeAuthBoxUpperContentResendCodeButtonProps = Readonly<{
	children: ReactNode;
}>;

export const SignUpConfirmationCodeAuthBoxUpperContentResendCodeButton = ({
	children,
}: SignUpConfirmationCodeAuthBoxUpperContentResendCodeButtonProps) => (
	<button
		type="button"
		className="text-sm font-semibold text-button-primary hover:text-link active:opacity-70"
	>
		{children}
	</button>
);
