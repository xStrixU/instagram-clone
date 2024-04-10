import type { ReactNode } from 'react';

type ButtonProps = Readonly<{
	type?: 'button' | 'submit';
	disabled?: boolean;
	onClick?: () => void;
	children: ReactNode;
}>;

export const Button = ({
	type = 'button',
	disabled,
	...props
}: ButtonProps) => (
	<button
		type={type}
		disabled={disabled}
		className="flex h-8 w-full items-center justify-center rounded-lg bg-button-primary px-4 text-sm font-semibold text-white enabled:hover:bg-button-primary-hover enabled:active:bg-button-primary-hover/70 disabled:opacity-70"
		{...props}
	/>
);
