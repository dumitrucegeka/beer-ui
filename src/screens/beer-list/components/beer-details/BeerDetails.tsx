import React from 'react';

import { Beer } from '../../../../models/Beer.interface';
import styles from './BeerDetails.module.css';
import mappings from '../../../../models/BeerDetailsKeyMappings'

const BeerDetails = (props: any) => {
  const { beerDetailsContainer, beerDetailContainer, beerDetailTitle, beerDetailValue } = styles
  console.log(props)
  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  const beer = { ...props?.location?.state?.beer } as Beer
  console.log(beer)

  function getBeerDetailDisplayValue(beerDetailKey: string): string {
    const mapping = mappings[beerDetailKey];
    console.log(mappings, mapping, beerDetailKey);
    return mapping || beerDetailKey;
  }

  return (
    <div className={beerDetailsContainer}>
      {Object.keys(beer).map((beerDetail, index) => {
        if (typeof beer[beerDetail as keyof Beer] === 'object' || beerDetail === 'image_url') {
          return
        }

        // eslint-disable-next-line consistent-return
        return (
          <div key={`${index.toString() + beer?.name}`} className={beerDetailContainer}>
            <p className={beerDetailTitle}>
              {getBeerDetailDisplayValue(beerDetail)}
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
