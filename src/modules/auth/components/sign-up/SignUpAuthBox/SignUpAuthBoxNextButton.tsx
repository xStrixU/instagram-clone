import { useTranslations } from 'next-intl';

import { Button } from '@/modules/ui/components/Button/Button';

import type { ComponentProps } from 'react';

import type { DistributiveOmit } from '@/common/types/utils.types';

type SignUpAuthBoxNextButtonProps = DistributiveOmit<
	ComponentProps<typeof Button>,
	'children'
>;

export const SignUpAuthBoxNextButton = (
	props: SignUpAuthBoxNextButtonProps,
) => {
	const t = useTranslations('auth.sign-up.SignUpAuthBox.steps');

	return <Button {...props}>{t('next')}</Button>;
};
