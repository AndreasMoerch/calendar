import type { LEGOSet } from "../types/LEGOSet"
import { groupByReleaseDateSorted } from './setByReleaseDateGrouper';

// Mock LEGO set data for testing
const mockLEGOSet: LEGOSet = {
  id: "10001",
  name: "Test Set",
  theme: "Test Theme",
  pieces: 100,
  releaseDate: new Date('2026-01-15'),
  urlPath: "test-set-10001",
  price: {
    currency:  "USD",
    amount: 59.99
  }
};

describe('groupByReleaseDateSorted', () => {
    it('should group and sort LEGO sets by their release dates', () => {
        const sets: LEGOSet[] = [
            { ...mockLEGOSet, id: "10002", releaseDate: new Date('2026-02-01') },
            { ...mockLEGOSet, id: "10003", releaseDate: new Date('2026-01-15') },
            { ...mockLEGOSet, id: "10004", releaseDate: new Date('2026-01-01') },
            { ...mockLEGOSet, id: "10005", releaseDate: new Date('2026-02-01') },
        ];

        const result = groupByReleaseDateSorted(sets);

        expect(Object.keys(result)).toEqual([
            new Date('2026-01-01').toDateString(),
            new Date('2026-01-15').toDateString(),
            new Date('2026-02-01').toDateString(),
        ]);

        expect(result[new Date('2026-01-01').toDateString()]).toHaveLength(1);
        expect(result[new Date('2026-01-15').toDateString()]).toHaveLength(1);
        expect(result[new Date('2026-02-01').toDateString()]).toHaveLength(2);
    });
});