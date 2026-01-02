import { formatMonthName, formatDayName, formatDayNumber } from './dateFormatter';

describe('formatMonthName', () => {
    it.each([
        { date: '2026-01-15', expected: 'January' },
        { date: '2026-02-20', expected: 'February' },
        { date: '2026-03-10', expected: 'March' },
        { date: '2026-04-05', expected: 'April' },
        { date: '2026-05-25', expected: 'May' },
        { date: '2026-06-30', expected: 'June' },
        { date: '2026-07-04', expected: 'July' },
        { date: '2026-08-15', expected: 'August' },
        { date: '2026-09-11', expected: 'September' },
        { date: '2026-10-31', expected: 'October' },
        { date: '2026-11-11', expected: 'November' },
        { date: '2026-12-24', expected: 'December' },
    ])('should return the month [$expected] name for the release date [$date]', ({ date, expected }) => {
        const result = formatMonthName(new Date(date));
        expect(result).toBe(expected);
    });
});

describe('formatDayName', () => {
    it.each([
        { date: '2026-01-05', expected: 'Monday' },
        { date: '2026-01-06', expected: 'Tuesday' },
        { date: '2026-01-07', expected: 'Wednesday' },
        { date: '2026-01-08', expected: 'Thursday' },
        { date: '2026-01-09', expected: 'Friday' },
        { date: '2026-01-10', expected: 'Saturday' },
        { date: '2026-01-11', expected: 'Sunday' },
    ])('should return the day [$expected] name for the release date [$date]', ({ date, expected }) => {
        const result = formatDayName(new Date(date));
        expect(result).toBe(expected);
    });
});

describe('formatDayNumber', () => {
    it.each([
        { date: '2026-01-01', expected: 1 },
        { date: '2026-02-15', expected: 15 },
        { date: '2026-12-31', expected: 31 },
    ])('should return the day [$expected] of the month for the release date [$date]', ({ date, expected }) => {
        const result = formatDayNumber(new Date(date));
        expect(result).toBe(expected);
    });
});