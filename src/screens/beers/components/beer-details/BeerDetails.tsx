import React from 'react';
import { Beer } from '../../../../models/Beer.interface';
import styles from './BeerDetails.module.css';
import mappings from '../../../../models/BeerDetailsKeyMappings';
import FoodPairing from '../food-pairing/FoodPairing';
import Rating from '../../../../components/Rating';
import PersistanceService from '../../../../services/PersistanceService';
import DetailsRow from './DetailsRow';

const BeerDetails = (props: any) => {
  const { beerDetailsContainer, imageStyle } = styles;
  const beer = { ...props?.location?.state?.beer } as Beer;

  function getBeerDetailDisplayValue(beerDetailKey: string): string {
    const mapping = mappings[beerDetailKey];
    return mapping || beerDetailKey;
  }

  return (
    <div className={beerDetailsContainer}>
      <div>
        <img className={imageStyle} src={beer.image_url} alt={beer.name} />
        <Rating
          rating={beer.rating}
          onChange={(rating) => {
            beer.rating = rating;
            PersistanceService.persistRating(beer, rating);
          }}
        />
        <DetailsRow propertyName='name' propertyValue={beer.name} />
        <FoodPairing pairings={[...beer.food_pairing]} />
      </div>

      <div>
        {Object.keys(beer).map((beerDetail, index) => {
          if (typeof beer[beerDetail as keyof Beer] === 'object' || beerDetail === 'image_url' || beerDetail === 'food_pairing' || beerDetail === 'id') {
            return;
          }

          return <DetailsRow key={`${index.toString() + beer?.name}`} propertyName={beerDetail} propertyValue={beer[beerDetail as keyof Beer]} />;
        })}
      </div>
    </div>
  );
};
export default BeerDetails;
