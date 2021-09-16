import React from 'react';

import { Beer } from '../../../../models/Beer.interface';
import styles from './BeerDetails.module.css';

const BeerDetails = (props: any) => {
  const { beerDetailsContainer, beerDetailContainer, beerDetailTitle, beerDetailValue } = styles
  console.log(props)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const beer = { ...props?.location?.state?.beer } as Beer
  console.log(beer)

  return (
    <div className={beerDetailsContainer}>
      {Object.keys(beer).map((beerDetail, index) => {
        if (typeof beer[beerDetail as keyof Beer] === 'object') {
          return
        }

        // eslint-disable-next-line consistent-return
        return (
          <div key={`${index.toString() + beer?.name}`} className={beerDetailContainer}>
            <p className={beerDetailTitle}>
              {beerDetail}
            </p>
            <p className={beerDetailValue}>
              {beer[beerDetail as keyof Beer]}
            </p>
          </div>
        )
      })}
    </div>
  )
}
export default BeerDetails
