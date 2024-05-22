import { unstable_setRequestLocale } from 'next-intl/server';

import {
	OAUTH_PROVIDER_PARAM,
	OAUTH_USER_PARAM,
} from '@/modules/api/oauth/oauth.constants';
import { LogInToAccountAuthBox } from '@/modules/auth/components/sign-up/LogInToAccountAuthBox';
import { SignUpAuthBox } from '@/modules/auth/components/sign-up/SignUpAuthBox/SignUpAuthBox';
import { SignUpAuthBoxMessages } from '@/modules/auth/components/sign-up/SignUpAuthBox/SignUpAuthBox.messages';
import { SignUpOAuthAuthBox } from '@/modules/auth/components/sign-up/SignUpOAuthAuthBox/SignUpOAuthAuthBox';
import { SignUpOAuthAuthBoxMessages } from '@/modules/auth/components/sign-up/SignUpOAuthAuthBox/SignUpOAuthAuthBox.messages';

import type { SearchParams } from '@/common/types/next.types';
import type { LocaleParams } from '@/features/i18n/types/i18n.types';

type SignUpPageProps = Readonly<{
	params: LocaleParams;
	searchParams: SearchParams<string>;
}>;

const SignUpPage = ({ params: { locale }, searchParams }: SignUpPageProps) => {
	unstable_setRequestLocale(locale);

	if (
		OAUTH_PROVIDER_PARAM in searchParams &&
		OAUTH_USER_PARAM in searchParams
	) {
		return (
			<SignUpOAuthAuthBoxMessages>
				<SignUpOAuthAuthBox />
			</SignUpOAuthAuthBoxMessages>
		);
	}

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
