/**
 * Formats the name of the month for a given date.
 * @param date non-null date
 * @returns the name of the month for the given date
 * @example "January"
 * @todo Future implementation should support localization
 */
export const formatMonthName = (date: Date): string => {
    return date.toLocaleDateString('en-US', { month: 'long' });
}

/**
 * Formats the name of the day of the week for a given date.
 * @param date non-null date
 * @returns the name of the day of the week for the given date
 * @example "Monday"
 * @todo Future implementation should support localization
 */
export const formatDayName = (date: Date): string => {
    return date.toLocaleDateString('en-US', { weekday: 'long' });
}

/**
 * Formats the day of the month for a given date.
 * @param date non-null date
 * @returns the day of the month for the given date
 * @example 1
 */
export const formatDayNumber = (date: Date): number => {
    return date.getDate();
}