import { Beer } from "../../models/Beer.interface";
import styles from './BeerList.module.css';
import BeerDetails from "./components/beer-details/BeerDetails";

export interface BeerListProps {
    beers: Beer[];
}

const BeerList = (props: BeerListProps) => {
    const { beerListContainer } = styles

    const { beers } = props;
    return (
        <div className={beerListContainer}>
            {beers?.map((beer, index) => (<BeerDetails key={index} {...beer}></BeerDetails>))}
        </div>
    )
}

export default BeerList;