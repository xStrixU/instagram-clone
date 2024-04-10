import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import type { LocaleParams } from '@/features/i18n/types/i18n.types';

type IndexPageProps = Readonly<{
	params: LocaleParams;
}>;

const IndexPage = ({ params: { locale } }: IndexPageProps) => {
	unstable_setRequestLocale(locale);

	const t = useTranslations('IndexPage');

	return <h1 className="text-4xl font-bold">{t('title')}</h1>;
};

export default IndexPage;
