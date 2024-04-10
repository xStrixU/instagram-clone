import NextLink from 'next/link';
import { twMerge } from 'tailwind-merge';

import type { ComponentProps } from 'react';

type InfoTextLinkProps = Readonly<{
	underline?: boolean;
}> &
	ComponentProps<typeof NextLink>;

export const InfoTextLink = ({ underline, ...props }: InfoTextLinkProps) => (
	<NextLink
		className={twMerge(
			'text-xs text-link active:opacity-50',
			underline && 'hover:underline',
		)}
		{...props}
	/>
);
