import { useTranslations } from 'next-intl';

export const SignUpBirthdayAuthBoxUpperContent = () => {
	const t = useTranslations('auth.sign-up.SignUpAuthBox.birthday');

	return (
		<>
			<h1 className="mt-2 font-semibold text-primary">{t('title')}</h1>
			<p className="text-primary">{t('content')}</p>
		</>
	);
};
