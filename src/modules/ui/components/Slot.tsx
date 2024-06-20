import { cloneElement, isValidElement } from 'react';
import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

export type AsChildProps<DefaultComponentProps> =
	| Readonly<{ asChild?: false } & DefaultComponentProps>
	| Readonly<{ asChild: true; children: ReactNode }>;

type SlotProps = Readonly<{
	children: ReactNode;
}> &
	React.HTMLAttributes<HTMLElement>;

export const Slot = ({ children, ...props }: SlotProps) => {
	if (!isValidElement(children)) {
		throw new TypeError('Single element child is required in Slot');
	}

	return cloneElement(children, {
		...props,
		...children.props,
		className: twMerge(props.className, children.props.className),
		style: {
			...props.style,
			...children.props.style,
		},
	});
};
