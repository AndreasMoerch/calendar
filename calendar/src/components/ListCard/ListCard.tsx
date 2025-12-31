import type { LEGOSet } from "../../types/LEGOSet";

interface ListCardProps {
    /**
     * Single non-null LEGO set to display.
     */
    set: LEGOSet
}

/**
 * ListCard component to display details of a single LEGO set.
 * @param ListCardProps - Props containing a LEGO set to display.
 * @returns a JSX element rendering the details of the LEGO set.
 */
const ListCard: React.FC<ListCardProps> = ({ set }) => {
    return (
        <div className="list-card">
            <h3>{set.name} ({set.theme})</h3>
            <p>Pieces: {set.pieces}</p>
            <p>Release Date: {set.releaseDate.toDateString()}</p>
            <p>Price: {set.price.currency} {set.price.amount.toFixed(2)}</p>
        </div>
    );
};

export default ListCard;