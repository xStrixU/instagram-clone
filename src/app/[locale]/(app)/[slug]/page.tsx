import { unstable_setRequestLocale } from 'next-intl/server';

import type { LocaleParams } from '@/features/i18n/types/i18n.types';

type UserProfilePageProps = Readonly<{
	params: LocaleParams<'slug'>;
}>;

const UserProfilePage = ({
	params: { locale, slug },
}: UserProfilePageProps) => {
	unstable_setRequestLocale(locale);

	return <h1 className="text-3xl font-bold">{slug}&apos;s Profile</h1>;
};

export default UserProfilePage;
