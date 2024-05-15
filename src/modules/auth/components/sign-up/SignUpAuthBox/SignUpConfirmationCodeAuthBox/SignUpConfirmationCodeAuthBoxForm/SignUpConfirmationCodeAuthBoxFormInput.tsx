import { useTranslations } from 'next-intl';
import { forwardRef } from 'react';

export const SignUpConfirmationCodeAuthBoxFormInput =
	forwardRef<HTMLInputElement>((props, ref) => {
		const t = useTranslations('auth.sign-up.SignUpAuthBox.confirmation-code');

		return (
			<input
				ref={ref}
				type="text"
				placeholder={t('confirmationCode')}
				className="h-9 w-full rounded border border-stroke bg-secondary px-3 text-primary outline-none"
				{...props}
			/>
		);
	});

SignUpConfirmationCodeAuthBoxFormInput.displayName =
	'SignUpConfirmationCodeAuthBoxFormInput';
