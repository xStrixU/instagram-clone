import { Select } from '@/modules/auth/components/ui/Select/Select';
import { getDaysInMonth } from '@/modules/auth/utils/calendar.utils';

type SignUpBirthdayAuthBoxFormDaySelectProps = Readonly<{
	year: number;
	month: number;
	setDay: (day: number) => void;
}>;

export const SignUpBirthdayAuthBoxFormDaySelect = ({
	year,
	month,
}: SignUpBirthdayAuthBoxFormDaySelectProps) => {
	const days = getDaysInMonth(year, month);
	const options = days.map(day => ({
		value: day,
		children: day,
	}));

	return <Select options={options} />;
};
