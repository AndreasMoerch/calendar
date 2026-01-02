import type React from "react";
import type { LEGOSet } from "../../types/LEGOSet";
import { ListViewItem } from "../ListViewITem";
import { groupByReleaseDateSorted } from "../../utils/setByReleaseDateGrouper";

interface ListViewProps {
    /**
     * Array of LEGO sets to display in the list view.
     */
    sets: LEGOSet[];
}

/**
 * ListView component to display a list of LEGO sets.
 * @param ListViewProps - Props containing an array of LEGO sets to display.
 * @returns a JSX element rendering a list of LEGO sets with their details.
 */
const ListView: React.FC<ListViewProps> = ({ sets }) => {

    const setsByReleaseDate = groupByReleaseDateSorted(sets);

    return (
        <div>
            {Object.entries(setsByReleaseDate)
                .map(([releaseDateString, sets]) => {
                    const releaseDate = new Date(releaseDateString);
                    return <ListViewItem key={releaseDateString} sets={sets} releaseDate={releaseDate} />
                })}
        </div>
    );
};

export default ListView;