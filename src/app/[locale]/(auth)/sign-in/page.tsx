import { unstable_setRequestLocale } from 'next-intl/server';

import { CreateAccountAuthBox } from '@/modules/auth/components/sign-in/CreateAccountAuthBox';
import { SignInAuthBox } from '@/modules/auth/components/sign-in/SignInAuthBox/SignInAuthBox';

import type { LocaleParams } from '@/features/i18n/types/i18n.types';

type SignInPageProps = Readonly<{
	params: LocaleParams;
}>;

const SignInPage = ({ params: { locale } }: SignInPageProps) => {
	unstable_setRequestLocale(locale);

	return (
		<>
			<SignInAuthBox />
			<CreateAccountAuthBox className="xs:mt-2.5" />
		</>
	);
};

export default SignInPage;
