import React from 'react';
import { Beer } from '../../../../models/Beer.interface';
import styles from './BeerDetails.module.css';
import mappings from '../../../../models/BeerDetailsKeyMappings';
import FoodPairing from '../food-pairing/FoodPairing';
import Rating from '../../../../components/Rating';
import PersistanceService from '../../../../services/PersistanceService';

const BeerDetails = (props: any) => {
  const { beerDetailsContainer, beerDetailContainer, beerDetailTitle, beerDetailValue, imageStyle } = styles;
  const beer = { ...props?.location?.state?.beer } as Beer;

  function getBeerDetailDisplayValue(beerDetailKey: string): string {
    const mapping = mappings[beerDetailKey];
    return mapping || beerDetailKey;
  }

  return (
    <div className={beerDetailsContainer}>
      <img className={imageStyle} src={beer.image_url} alt={beer.name} />
      <Rating
        rating={beer.rating}
        onChange={(rating) => {
          beer.rating = rating;
          PersistanceService.persistRating(beer, rating);
        }}
      />
      <FoodPairing pairings={[...beer.food_pairing]} />

      <div>
        {Object.keys(beer).map((beerDetail, index) => {
          if (typeof beer[beerDetail as keyof Beer] === 'object' || beerDetail === 'image_url' || beerDetail === 'food_pairing') {
            return;
          }

          // eslint-disable-next-line consistent-return
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
