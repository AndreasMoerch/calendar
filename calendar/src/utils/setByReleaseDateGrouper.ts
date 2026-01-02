import type { LEGOSet } from "../types/LEGOSet"

/**
 * Groups LEGO sets by their release dates and sorts them in ascending order.
 * @param sets non-empty list of LEGO sets.
 * @returns Record mapping release date strings to arrays of LEGO sets, sorted by release date.
 * @example
 * {
 *   "Mon Jan 01 2026": [LEGOSet1, LEGOSet2],
 *   "Wed Feb 01 2026": [LEGOSet3]
 * }
 */
export const groupByReleaseDateSorted = (sets: LEGOSet[]): Record<string, LEGOSet[]> =>
    sets
        .sort((a, b) => a.releaseDate.getTime() - b.releaseDate.getTime())
        .reduce((acc, set) => {
            const releaseDate = set.releaseDate;
            if (!acc[releaseDate.toDateString()]) {
                acc[releaseDate.toDateString()] = [];
            }
            acc[releaseDate.toDateString()].push(set);
            return acc;
        }, {} as Record<string, LEGOSet[]>)