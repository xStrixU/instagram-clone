import { twJoin } from 'tailwind-merge';

import SpinnerIcon from '@/modules/ui/assets/icons/spinner.svg';
import { Slot } from '@/modules/ui/components/Slot';

import type { ReactNode } from 'react';

import type { AsChildProps } from '@/modules/ui/components/Slot';

export type ButtonProps = AsChildProps<{
	type?: 'button' | 'submit';
	disabled?: boolean;
	isLoading?: boolean;
	children: ReactNode;
	onClick?: () => void;
}>;

export const Button = ({ children, ...props }: ButtonProps) => {
	const className = twJoin(
		'flex h-8 w-full items-center justify-center rounded-lg bg-button-primary px-4 text-sm font-semibold text-white enabled:hover:bg-button-primary-hover enabled:active:bg-button-primary-hover/70 disabled:opacity-70',
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
