import { useLocale } from 'next-intl';

import { getMonthNames } from '@/modules/auth/utils/calendar.utils';
import { Select } from '@/modules/ui/components/Select/Select';

type SignUpBirthdayAuthBoxFormMonthSelectProps = Readonly<{
	year: number;
	month: number;
	setMonth: (month: number) => void;
}>;

export const SignUpBirthdayAuthBoxFormMonthSelect = ({
	year,
	month,
	setMonth,
}: SignUpBirthdayAuthBoxFormMonthSelectProps) => {
	const locale = useLocale();

	const months = getMonthNames(locale, year);
	const options = months.map((month, i) => ({
		value: i,
		children: month,
	}));

	return (
		<Select
			options={options}
			value={month}
			onChange={({ target }) => setMonth(Number.parseInt(target.value))}
		/>
	);
};
