import { useTranslations } from 'next-intl';
import { useFormStatus } from 'react-dom';

import { Button } from '@/modules/ui/components/Button/Button';

type SignInAuthBoxFormSubmitButtonProps = Readonly<{
	disabled: boolean;
}>;

export const SignInAuthBoxFormSubmitButton = ({
	disabled,
}: SignInAuthBoxFormSubmitButtonProps) => {
	const { pending } = useFormStatus();
	const t = useTranslations('auth.sign-in.SignInAuthBox.form');

	return (
		<Button type="submit" disabled={disabled} isLoading={pending} fullWidth>
			{t('submit')}
		</Button>
	);
};
