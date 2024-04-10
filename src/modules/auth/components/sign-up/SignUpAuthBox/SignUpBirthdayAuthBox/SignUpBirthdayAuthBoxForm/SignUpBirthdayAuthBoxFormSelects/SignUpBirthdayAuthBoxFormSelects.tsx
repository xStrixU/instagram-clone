import { SignUpBirthdayAuthBoxFormDaySelect } from './SignUpBirthdayAuthBoxFormDaySelect';
import { SignUpBirthdayAuthBoxFormMonthSelect } from './SignUpBirthdayAuthBoxFormMonthSelect';
import { SignUpBirthdayAuthBoxFormYearSelect } from './SignUpBirthdayAuthBoxFormYearSelect';

import type { BirthDateReducerAction } from '../hooks/useSignUpBirthdayAuthBoxFormBirthDate';
import type { Dispatch } from 'react';

type SignUpBirthdayAuthBoxFormSelectsProps = Readonly<{
	birthDate: Date;
	dispatchBirthDate: Dispatch<BirthDateReducerAction>;
}>;

export const SignUpBirthdayAuthBoxFormSelects = ({
	birthDate,
	dispatchBirthDate,
}: SignUpBirthdayAuthBoxFormSelectsProps) => {
	const year = birthDate.getFullYear();
	const month = birthDate.getMonth();

	return (
		<div className="flex gap-2.5">
			<SignUpBirthdayAuthBoxFormMonthSelect
				year={year}
				month={month}
				setMonth={month => dispatchBirthDate({ type: 'month', value: month })}
			/>
			<SignUpBirthdayAuthBoxFormDaySelect
				year={year}
				month={month}
				setDay={day => dispatchBirthDate({ type: 'day', value: day })}
			/>
			<SignUpBirthdayAuthBoxFormYearSelect
				year={year}
				setYear={year => dispatchBirthDate({ type: 'year', value: year })}
			/>
		</div>
	);
};
