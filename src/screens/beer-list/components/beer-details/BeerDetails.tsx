import React from 'react';

import { Beer } from '../../../../models/Beer.interface';
import styles from './BeerDetails.module.css';
import mappings from '../../../../models/BeerDetailsKeyMappings';
import FoodPairing from '../food-pairing/FoodPairing';

const BeerDetails = (props: any) => {
  const { beerDetailsContainer, beerDetailContainer, beerDetailTitle, beerDetailValue } = styles;
  const beer = { ...props?.location?.state?.beer } as Beer;

  function getBeerDetailDisplayValue(beerDetailKey: string): string {
    const mapping = mappings[beerDetailKey];
    return mapping || beerDetailKey;
  }

  return (
    <div className={beerDetailsContainer}>
      <img src={beer.image_url} height='500px' width='200px' alt={beer.name} />
      <div>
        <FoodPairing {...beer.food_pairing} />
        {Object.keys(beer).map((beerDetail, index) => {
          if (typeof beer[beerDetail as keyof Beer] === 'object' || beerDetail === 'image_url') {
            return;
          }

          return (
            <div key={`${index.toString() + beer?.name}`} className={beerDetailContainer}>
              <p className={beerDetailTitle}>{getBeerDetailDisplayValue(beerDetail)}</p>
              <p className={beerDetailValue}>{beer[beerDetail as keyof Beer]}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BeerDetails;
