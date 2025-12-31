import type { LEGOSet } from "../../types/LEGOSet";
import './ListCard.css';

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
        <div className="card">
            <div className="card-header">
                <span className="card-header-name">{set.name}</span>
            </div>
            <div className="card-body">
                <span className="card-header-theme">{set.theme}</span>
                <span className="card-header-pieces">{set.pieces}</span>
                <span className="card-header-releaseDate">{set.releaseDate.toDateString()}</span>
                <span className="card-header-price">{set.price.currency} {set.price.amount.toFixed(2)}</span>
            </div>
        </div>
    );
};

export default ListCard;