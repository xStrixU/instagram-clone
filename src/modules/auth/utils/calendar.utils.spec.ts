import { describe, expect, it, vi } from 'vitest';

import { getDaysInMonth, getMonthNames, getYearsFrom } from './calendar.utils';

describe('calendar.utils', () => {
	describe('getDaysInMonth', () => {
		const date = new Date(2024, 3, 10);

		vi.useFakeTimers();
		vi.setSystemTime(date);

		it.each([
			{ year: 2024, month: 1, lastDay: 29 },
			{ year: 2023, month: 5, lastDay: 30 },
			{ year: 2022, month: 9, lastDay: 31 },
		])(
			`getDaysInMonth($year, $month) returns $days`,
			({ year, month, lastDay }) => {
				const days = getDaysInMonth(year, month);

				expect(days.length).toBe(lastDay);
				expect(days[days.length - 1]).toBe(lastDay);
			},
		);

		it('should return days until April 10', () => {
			const days = getDaysInMonth(2024, 3);

			expect(days.length).toBe(10);
			expect(days[days.length - 1]).toBe(10);
		});

		vi.useRealTimers();
	});

	describe('getMonthNames', () => {
		const date = new Date(2024, 3, 10);

		vi.useFakeTimers();
		vi.setSystemTime(date);

		it.each([
			{
				locale: 'en',
				year: 2023,
				months: [
					'January',
					'February',
					'March',
					'April',
					'May',
					'June',
					'July',
					'August',
					'September',
					'October',
					'November',
					'December',
				],
			},
			{
				locale: 'pl',
				year: 2022,
				months: [
					'styczeń',
					'luty',
					'marzec',
					'kwiecień',
					'maj',
					'czerwiec',
					'lipiec',
					'sierpień',
					'wrzesień',
					'październik',
					'listopad',
					'grudzień',
				],
			},
		])(
			`getMonthNames($locale, $year) returns valid month names for locale $locale`,
			({ locale, year, months }) => {
				expect(getMonthNames(locale, year)).toEqual(months);
			},
		);

		it('should return months until April', () => {
			const months = getMonthNames('en', 2024);

			expect(months.length).toBe(4);
			expect(months[months.length - 1]).toBe('April');
		});

		vi.useRealTimers();
	});

	describe('getYearsFrom', () => {
		it.each([
			{ year: 1972, from: 1970, years: [1972, 1971, 1970] },
			{ year: 2005, from: 2000, years: [2005, 2004, 2003, 2002, 2001, 2000] },
			{ year: 2021, from: 2018, to: 2021, years: [2021, 2020, 2019, 2018] },
		])(`getYearsFrom($from) returns $years`, ({ year, from, years }) => {
			const date = new Date(year, 0);

			vi.useFakeTimers();
			vi.setSystemTime(date);

			expect(getYearsFrom(from)).toEqual(years);

			vi.useRealTimers();
		});
	});
});
