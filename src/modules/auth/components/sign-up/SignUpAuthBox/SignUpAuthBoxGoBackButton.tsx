import { useTranslations } from 'next-intl';

type SignUpAuthBoxGoBackButtonProps = Readonly<{
	onClick: () => void;
}>;

export const SignUpAuthBoxGoBackButton = ({
	onClick,
}: SignUpAuthBoxGoBackButtonProps) => {
	const t = useTranslations('auth.SignUpAuthBox.steps');

	return (
		<button
			type="button"
			onClick={onClick}
			className="text-sm font-semibold text-button-primary hover:text-link active:opacity-70"
		>
			{t('previous')}
		</button>
	);
};
