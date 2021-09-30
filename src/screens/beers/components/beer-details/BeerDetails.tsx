import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowBackForward from '@material-ui/icons/ArrowForward';

import { Beer } from '../../../../models/Beer.interface';
import FoodPairing from '../food-pairing/FoodPairing';
import Rating from '../../../../shared-components/Rating';
import PersistanceService from '../../../../services/PersistanceService';
import DetailsRow from './DetailsRow';
import styles from './BeerDetails.module.css';
import BeerApiService from '../../../../services/BeerApiService';
import BeerService from '../../../../services/BeerService';

const BeerDetails = (props: any) => {
  const { beerDetailsContainer, imageStyle, beerDetailsSummary, beerDetailsSummaryRows, beerDetailsGeneral } = styles;

  const history = useHistory();
  const params = useParams<{ id: string }>();

  const idReceived = useMemo(() => (props?.location?.state?.beerId as number) || +params.id, [props, params]);

  const [beerId, setBeerId] = useState(idReceived);
  const [beer, setBeer] = useState(BeerService.createDefaultObject());

  useEffect(() => {
    setBeerId(idReceived);
  }, [idReceived]);

  useEffect(() => {
    if (beerId) {
      BeerApiService.getById(beerId)
        .then((result) => PersistanceService.restoreRating([result]))
        .then((result) => setBeer(result[0]))
        .catch((err) => history.push('/beers'));
    }
  }, [beerId]);

  const goBack = useCallback(() => {
    let id = beerId;
    if (beerId > 1) {
      id = beerId - 1;
    }
    history.push(`/beers/${id}`, { beerId: id });
  }, [beerId, history]);

  const goForward = () => {
    const newId = beerId + 1;
    history.push(`/beers/${newId}`, { beerId: newId });
  };

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
