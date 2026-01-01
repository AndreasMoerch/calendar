import type { LEGOSet } from "../types/LEGOSet";

/**
 * Generates a fully qualified URL for a given LEGO set.
 * @param set - non-null LEGO set.
 * @returns the URL string for the LEGO set.
 * @example "https://www.lego.com/en-us/product/test-set-10001"
 * @todo Future implementation should support localization.
 */
export const generateUrlForSet = (set: LEGOSet): string => {
    // Sets are generated via the us-en locale and appeded with set number (id). 
    // This is true even for other locales, e.g. da-dk.
    return `https://www.lego.com/en-us/product/${set.urlPath}`;
}