import { useTranslations } from 'next-intl';

import { Button } from '../../ui/Button/Button';

import type { ComponentProps } from 'react';

type SignUpAuthBoxNextButtonProps = Omit<
	ComponentProps<typeof Button>,
	'children'
>;

export const SignUpAuthBoxNextButton = (
	props: SignUpAuthBoxNextButtonProps,
) => {
	const t = useTranslations('auth.SignUpAuthBox.steps');

	return <Button {...props}>{t('next')}</Button>;
};
