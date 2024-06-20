import { getYearsFrom } from '@/modules/auth/utils/calendar.utils';
import { Select } from '@/modules/ui/components/Select/Select';

type SignUpBirthdayAuthBoxFormYearSelectProps = Readonly<{
	year: number;
	setYear: (year: number) => void;
}>;

export const SignUpBirthdayAuthBoxFormYearSelect = ({
	year,
	setYear,
}: SignUpBirthdayAuthBoxFormYearSelectProps) => {
	const years = getYearsFrom(1919);
	const options = years.map(year => ({
		value: year,
		children: year,
	}));

	return (
		<Select
			options={options}
			value={year}
			onChange={({ target }) => setYear(Number.parseInt(target.value))}
		/>
	);
};
