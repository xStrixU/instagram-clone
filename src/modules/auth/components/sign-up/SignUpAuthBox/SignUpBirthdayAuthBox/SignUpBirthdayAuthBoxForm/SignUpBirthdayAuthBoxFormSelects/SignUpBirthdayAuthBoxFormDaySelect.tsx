import { getDaysInMonth } from '@/modules/auth/utils/calendar.utils';
import { Select } from '@/modules/ui/components/Select/Select';

type SignUpBirthdayAuthBoxFormDaySelectProps = Readonly<{
	year: number;
	month: number;
	setDay: (day: number) => void;
}>;

export const SignUpBirthdayAuthBoxFormDaySelect = ({
	year,
	month,
	setDay,
}: SignUpBirthdayAuthBoxFormDaySelectProps) => {
	const days = getDaysInMonth(year, month);
	const options = days.map(day => ({
		value: day,
		children: day,
	}));

	return (
		<Select
			options={options}
			onChange={({ target }) => setDay(Number.parseInt(target.value))}
		/>
	);
};
