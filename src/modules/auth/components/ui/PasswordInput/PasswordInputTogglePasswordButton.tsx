type PasswordInputTogglePasswordButtonProps = Readonly<{
	isShown: boolean;
	onToggle: (isShown: boolean) => void;
}>;

export const PasswordInputTogglePasswordButton = ({
	isShown,
	onToggle,
}: PasswordInputTogglePasswordButtonProps) => {
	return (
		<button
			type="button"
			tabIndex={-1}
			aria-hidden
			onClick={() => onToggle(!isShown)}
			className="text-sm font-semibold text-button-secondary hover:opacity-50"
		>
			{isShown ? 'Hide' : 'Show'}
		</button>
	);
};
