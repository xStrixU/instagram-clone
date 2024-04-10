import { useTranslations } from 'next-intl';

import { AuthBox } from '../common/AuthBox';

import { Link } from '@/features/i18n/lib/i18n.navigation';

type CreateAccountAuthBoxProps = Readonly<{
	className?: string;
}>;

export const CreateAccountAuthBox = ({
	className,
}: CreateAccountAuthBoxProps) => {
	const t = useTranslations('auth.CreateAccountAuthBox');

	return (
		<AuthBox className={className}>
			<p className="text-center text-sm text-primary">
				{t.rich('content', {
					link: chunks => (
						<Link
							href="/sign-up"
							className="font-semibold text-button-primary active:opacity-50"
						>
							{chunks}
						</Link>
					),
				})}
			</p>
		</AuthBox>
	);
};
