import { unstable_setRequestLocale } from 'next-intl/server';

import { signOut } from '@/modules/auth/actions/actions';

import type { LocaleParams } from '@/features/i18n/types/i18n.types';

type IndexPageProps = Readonly<{
	params: LocaleParams;
}>;

const IndexPage = ({ params: { locale } }: IndexPageProps) => {
	unstable_setRequestLocale(locale);

	return (
		<>
			<form>
				<button formAction={signOut}>Sign out</button>
			</form>
		</>
	);
};

export default IndexPage;
