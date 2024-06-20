import { twMerge } from 'tailwind-merge';

import SpinnerIcon from '@/modules/ui/assets/icons/spinner.svg';
import { Slot } from '@/modules/ui/components/Slot';

import type { ReactNode } from 'react';

import type { AsChildProps } from '@/modules/ui/components/Slot';

type ButtonCommonProps = Readonly<{
	fullWidth?: boolean;
}>;

type ButtonAsChildProps = AsChildProps<{
	type?: 'button' | 'submit';
	disabled?: boolean;
	isLoading?: boolean;
	children: ReactNode;
	onClick?: () => void;
}>;

type ButtonProps = ButtonAsChildProps & ButtonCommonProps;

export const Button = ({ children, fullWidth, ...props }: ButtonProps) => {
	const className = twMerge(
		'flex h-8 items-center justify-center rounded-lg bg-button-primary px-4 text-sm font-semibold text-white enabled:hover:bg-button-primary-hover enabled:active:bg-button-primary-hover/70 disabled:opacity-70',
		fullWidth ? 'w-full' : 'w-fit',
	);

	if (props.asChild) {
		return <Slot className={className}>{children}</Slot>;
	}

	const { type = 'button', isLoading, ...rest } = props;

	return (
		<button type={type} className={className} {...rest}>
			{isLoading ? (
				<SpinnerIcon aria-label="Loading" className="animate-loading" />
			) : (
				children
			)}
		</button>
	);
};
