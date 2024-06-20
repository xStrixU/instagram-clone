import { useTranslations } from 'next-intl';
import { useFormStatus } from 'react-dom';

import { Button } from '@/modules/ui/components/Button/Button';

type SignUpOAuthAuthBoxFormSubmitButtonProps = Readonly<{
	disabled: boolean;
}>;

export const SignUpOAuthAuthBoxFormSubmitButton = ({
	disabled,
}: SignUpOAuthAuthBoxFormSubmitButtonProps) => {
	const { pending } = useFormStatus();
	const t = useTranslations('auth.sign-up.SignUpOAuthAuthBoxForm.form');

	return (
		<Button type="submit" disabled={disabled} isLoading={pending}>
			{t('submit')}
		</Button>
	);
};
