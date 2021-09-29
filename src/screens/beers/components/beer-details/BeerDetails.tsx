import React, { useCallback, useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowBackForward from '@material-ui/icons/ArrowForward';

import { Beer } from '../../../../models/Beer.interface';
import mappings from '../../../../models/BeerDetailsKeyMappings';
import FoodPairing from '../food-pairing/FoodPairing';
import Rating from '../../../../components/Rating';
import PersistanceService from '../../../../services/PersistanceService';
import DetailsRow from './DetailsRow';
import styles from './BeerDetails.module.css';

const BeerDetails = (props: any) => {
  const { beerDetailsContainer, imageStyle, beerDetailsSummary, beerDetailsSummaryRows, beerDetailsGeneral } = styles;

  const history = useHistory();
  const params = useParams<{ id: string }>();

  const idReceived = useMemo(() => (props?.location?.state?.beerId as number) || +params.id, [props, params]);

  const [beerId, setBeerId] = useState(idReceived);
  // TODO - method for default beer creation
  const [beer, setBeer] = useState({ food_pairing: [], name: undefined, rating: undefined } as unknown as Beer);

  useEffect(() => {
    setBeerId(idReceived);
  }, [idReceived]);

  useEffect(() => {
    const apiUrl = 'https://api.punkapi.com/v2/beers/';
    console.log({ beerId });

    if (beerId) {
      axios.get<Beer[]>(`${apiUrl}${beerId}`).then((result) => setBeer(result.data[0]));
    }
  }, [beerId]);

  const goBack = useCallback(() => {
    const id = beerId - 1 > 0 ? beerId - 1 : 1;
    history.push(`/beers/${id}`, { beerId: id });
  }, [beerId, history]);

  const goForward = () => {
    // TODO - handle 404 for numbers too big
    const newId = beerId + 1;
    console.log({ newId });
    history.push(`/beers/${newId}`, { beerId: newId });
  };

  function getBeerDetailDisplayValue(beerDetailKey: string): string {
    const mapping = mappings[beerDetailKey];
    return mapping || beerDetailKey;
  }

  return (
    <div className={beerDetailsContainer}>
      <div className={beerDetailsSummary}>
        <ArrowBackIcon onClick={goBack} />

        <img className={imageStyle} src={beer.image_url} alt={beer.name} />

        <div className={beerDetailsSummaryRows}>
          <DetailsRow propertyName='name' propertyValue={beer.name} bordered={false} />

          <FoodPairing pairings={[...beer.food_pairing]} />

          <Rating
            rating={beer.rating}
            onChange={(rating) => {
              beer.rating = rating;
              PersistanceService.persistRating(beer, rating);
            }}
          />
        </div>

        <ArrowBackForward onClick={() => goForward()} />
      </div>

      <div className={beerDetailsGeneral}>
        {Object.keys(beer).map((beerDetail, index) => {
          if (typeof beer[beerDetail as keyof Beer] === 'object' || beerDetail === 'image_url' || beerDetail === 'food_pairing' || beerDetail === 'id') {
            return;
          }

          return <DetailsRow key={`${index.toString() + beer?.name}`} propertyName={beerDetail} propertyValue={beer[beerDetail as keyof Beer]} bordered />;
        })}
      </div>
    </div>
  );
};
export default BeerDetails;
