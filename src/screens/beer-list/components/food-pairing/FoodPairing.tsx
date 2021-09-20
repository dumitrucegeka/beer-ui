import React from 'react';

import styles from '../beer-details/BeerDetails.module.css';

const FoodPairing = (props: any) => {
    const { beerDetailTitle, beerDetailContainer, beerDetailValue } = styles
    const foodPairing = [...Object.values(props)];
    return (
        foodPairing?.length
            ? (
                <div className={beerDetailContainer}>
                    <p className={beerDetailTitle}>Food pairing:</p>
                    <p className={beerDetailValue}>{foodPairing.join(', ')}</p>
                </div>
)
            : null
    )
}

export default FoodPairing
