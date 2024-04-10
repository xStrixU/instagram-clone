import { useTranslations } from 'next-intl';

export const AlternativeAuthDivider = () => {
	const t = useTranslations('auth.AlternativeAuthDivider');

	return (
		<p className="flex w-full items-center gap-4 text-sm font-semibold text-secondary before:h-px before:grow before:bg-separator after:h-px after:grow after:bg-separator">
			{t('or')}
		</p>
	);
};
