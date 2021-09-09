import { Beer } from "../../../../models/Beer.interface"
import styles from './BeerDetails.module.css';

const keys = <DataType, Key extends keyof DataType>(item: DataType, key: Key): Key[] => {
    return Object.keys(item) as Key[]
}

const BeerDetails = (beer: Beer) => {
    const { beerDetailsContainer, beerDetailContainer, beerDetailTitle, beerDetailValue } = styles

    return (
        <div className={beerDetailsContainer}>
            {Object.keys(beer).map((beerDetail, index) => {
                if (typeof beer[beerDetail as keyof Beer] === 'object') {
                    return
                }

                return <div key={index} className={beerDetailContainer}>
                    <p className={beerDetailTitle}> {beerDetail} : </p>
                    <p className={beerDetailValue}> {beer[beerDetail as keyof Beer]} </p>
                </div>
            })}
        </div>
    )
}

export default BeerDetails;