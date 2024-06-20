import { useTranslations } from 'next-intl';

type PasswordInputTogglePasswordButtonProps = Readonly<{
	isShown: boolean;
	onToggle: (isShown: boolean) => void;
}>;

export const PasswordInputTogglePasswordButton = ({
	isShown,
	onToggle,
}: PasswordInputTogglePasswordButtonProps) => {
	const t = useTranslations('auth.ui.PasswordInput');

	return (
		<button
			type="button"
			tabIndex={-1}
			aria-hidden
			onClick={() => onToggle(!isShown)}
			className="text-sm font-semibold text-button-secondary hover:opacity-50"
		>
			{isShown ? t('hide') : t('show')}
		</button>
	);
};
