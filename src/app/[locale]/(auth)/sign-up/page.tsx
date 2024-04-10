import { unstable_setRequestLocale } from 'next-intl/server';

import { LogInToAccountAuthBox } from '@/modules/auth/components/sign-up/LogInToAccountAuthBox';
import { SignUpAuthBox } from '@/modules/auth/components/sign-up/SignUpAuthBox/SignUpAuthBox';
import { SignUpAuthBoxMessages } from '@/modules/auth/components/sign-up/SignUpAuthBox/SignUpAuthBoxMessages';

import type { LocaleParams } from '@/features/i18n/types/i18n.types';

type SignUpPageProps = Readonly<{
	params: LocaleParams;
}>;

const SignUpPage = ({ params: { locale } }: SignUpPageProps) => {
	unstable_setRequestLocale(locale);

	return (
		<>
			<SignUpAuthBoxMessages>
				<SignUpAuthBox />
			</SignUpAuthBoxMessages>
			<LogInToAccountAuthBox className="xs:mt-2.5" />
		</>
	);
};

export default SignUpPage;
