import { twMerge } from 'tailwind-merge';

import type { ReactNode } from 'react';

type AuthBoxProps = Readonly<{
	className?: string;
	children: ReactNode;
}>;

export const AuthBox = ({ className, children }: AuthBoxProps) => (
	<div
		className={twMerge(
			className,
			'flex w-full flex-col items-center px-9 py-5 xs:max-w-[350px] xs:border xs:border-separator',
		)}
	>
		{children}
	</div>
);
