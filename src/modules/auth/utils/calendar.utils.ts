export const getDaysInMonth = (year: number, month: number) => {
	const currentDate = new Date();
	const days =
		currentDate.getFullYear() === year && currentDate.getMonth() === month
			? currentDate.getDate()
			: new Date(year, month + 1, 0).getDate();

	return Array.from({ length: days }).map((_, i) => i + 1);
};

export const getMonthNames = (locale: string, year: number) => {
	const currentDate = new Date();
	const monthsCount =
		currentDate.getFullYear() === year ? currentDate.getMonth() + 1 : 12;

	const formatter = new Intl.DateTimeFormat(locale, { month: 'long' });
	const months = Array.from({ length: monthsCount }).map((_, i) => {
		const date = new Date();
		date.setMonth(i);

		return date;
	});

	return months.map(formatter.format);
};

export const getYearsFrom = (from: number) => {
	const currentYear = new Date().getFullYear();

	return Array.from({ length: currentYear - from + 1 })
		.map((_, i) => i + from)
		.reverse();
};
