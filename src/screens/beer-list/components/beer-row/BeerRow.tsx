import { Beer } from "../../../../models/Beer.interface";

const BeerRow = (beer: Beer) => {

    return (
        <div>{beer.name} - {beer.tagline}</div>
    )
}

export default BeerRow;