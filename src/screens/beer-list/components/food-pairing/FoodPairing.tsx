import React from 'react'

import styles from '../beer-details/BeerDetails.module.css'

interface FoodPairingProps {
  pairings: string[]
}

const FoodPairing = (props: FoodPairingProps) => {
  const { beerDetailTitle, beerDetailContainer, beerDetailValue } = styles
  const { pairings } = props

  return pairings?.length ? (
    <div className={beerDetailContainer}>
      <p className={beerDetailTitle}>Food pairing:</p>
      <p className={beerDetailValue}>{pairings.join(', ')}</p>
    </div>
  ) : null
}

export default FoodPairing
