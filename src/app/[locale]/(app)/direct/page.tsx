import { unstable_setRequestLocale } from 'next-intl/server';

import type { LocaleParams } from '@/features/i18n/types/i18n.types';

type DirectPageProps = Readonly<{
	params: LocaleParams;
}>;

const DirectPage = ({ params: { locale } }: DirectPageProps) => {
	unstable_setRequestLocale(locale);

	return <h1 className="text-3xl font-bold">Direct</h1>;
};

export default DirectPage;
