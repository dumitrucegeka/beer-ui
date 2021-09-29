import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowBackForward from '@material-ui/icons/ArrowForward';
import styles from './BeerDetails.module.css';

import { Beer } from '../../../../models/Beer.interface';
import mappings from '../../../../models/BeerDetailsKeyMappings';
import FoodPairing from '../food-pairing/FoodPairing';
import Rating from '../../../../components/Rating';
import PersistanceService from '../../../../services/PersistanceService';
import DetailsRow from './DetailsRow';

const BeerDetails = (props: any) => {
  const { beerDetailsContainer, imageStyle, beerDetailsSummary, beerDetailsSummaryRows, beerDetailsGeneral } = styles;
  const beer = { ...props?.location?.state?.beer } as Beer;
  const goToPreviousBeer = { ...props?.location?.state?.goToPreviousBeer };
  const goToNextBeer = { ...props?.location?.state?.goToNextBeer };

  function getBeerDetailDisplayValue(beerDetailKey: string): string {
    const mapping = mappings[beerDetailKey];
    return mapping || beerDetailKey;
  }

  return (
    <div className={beerDetailsContainer}>
      <div className={beerDetailsSummary}>
        <ArrowBackIcon />

        <img className={imageStyle} src={beer.image_url} alt={beer.name} />

        <div className={beerDetailsSummaryRows}>
          <DetailsRow propertyName='name' propertyValue={beer.name} />

          <FoodPairing pairings={[...beer.food_pairing]} />

          <Rating
            rating={beer.rating}
            onChange={(rating) => {
              beer.rating = rating;
              PersistanceService.persistRating(beer, rating);
            }}
          />
        </div>

        <ArrowBackForward />
      </div>

      <div className={beerDetailsGeneral}>
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
