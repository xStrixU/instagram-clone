import { InfoTextLink } from './InfoTextLink';

import type { ReactNode } from 'react';

type InfoTextProps = Readonly<{
	children: ReactNode;
}>;

export const InfoText = ({ children }: InfoTextProps) => (
	<p className="text-center text-xs text-secondary">{children}</p>
);

InfoText.Link = InfoTextLink;
