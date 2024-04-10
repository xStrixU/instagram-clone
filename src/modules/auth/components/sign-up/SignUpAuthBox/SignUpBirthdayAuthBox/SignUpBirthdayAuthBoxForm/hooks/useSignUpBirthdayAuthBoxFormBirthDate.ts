import { useReducer } from 'react';

export interface BirthDateReducerAction {
	type: 'day' | 'month' | 'year';
	value: number;
}

const birthDateReducer = (state: Date, action: BirthDateReducerAction) => {
	const updatedDate = new Date(state);

	switch (action.type) {
		case 'day':
			updatedDate.setDate(action.value);
			break;
		case 'month':
			updatedDate.setMonth(action.value);
			break;
		case 'year':
			updatedDate.setFullYear(action.value);
			break;
	}

	return updatedDate;
};

const initialBirthDateState = new Date();

export const useSignUpBirthdayAuthBoxFormBirthDate = () => {
	const [birthDate, dispatchBirthDate] = useReducer(
		birthDateReducer,
		initialBirthDateState,
	);

	return { birthDate, dispatchBirthDate };
};
