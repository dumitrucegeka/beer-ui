import { Beer } from "../../models/Beer.interface";
import styles from './BeerList.module.css';
import BeerDetails from "./components/beer-details/BeerDetails";
import BeerRow from "./components/beer-row/BeerRow";

export interface BeerListProps {
    beers: Beer[];
}

const BeerList = (props: BeerListProps) => {
    const { beerListContainer } = styles
    const { beers } = props;

    return (
        <div className={beerListContainer}>
            {beers?.map((beer, index) => <BeerRow {...beer}></BeerRow>)}
        </div>
    );
}

export default BeerList;