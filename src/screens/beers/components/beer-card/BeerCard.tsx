import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions, CardMedia } from '@material-ui/core';
import styles from './BeerCard.module.css';
import { Beer } from '../../../../models/Beer.interface';
import RatingWrapper from '../../../../components/Rating';
import FavouriteWrapper from '../../../../components/Favourite';

interface BeerCardProps {
  beer: Beer;
}

const BeerCard = (props: BeerCardProps) => {
  const { cardStyle, cardContentStyle, cardActionsStyle, beerImageStyle, beerNameStyle, beerTaglineStyle } = styles;
  const history = useHistory();
  const { beer } = props;

  const clickHandler = useCallback(() => {
    history.push(`/beers/${beer.id}`, { beer });
  }, [history, beer]);

  const ratingHandler = useCallback((rating: number) => {
    beer.rating = rating;
    const storageKey = 'rated-beers';
    const localStorageValue = localStorage.getItem(storageKey) as string;
    const ratedBeers: { [key: number]: Beer } = JSON.parse(localStorageValue) || {};
    ratedBeers[beer.id] = beer;
    localStorage.setItem(storageKey, JSON.stringify(ratedBeers));
  }, []);

  const favouriteHandler = (isFavourite: boolean) => {
    beer.favourite = isFavourite;
    const storageKey = 'favourite-beers';
    const localStorageValue = localStorage.getItem(storageKey) as string;
    const favouriteBeers: { [key: number]: Beer } = JSON.parse(localStorageValue) || {};
    if (isFavourite) {
      favouriteBeers[beer.id] = beer;
    } else {
      delete favouriteBeers[beer.id];
    }

    localStorage.setItem(storageKey, JSON.stringify(favouriteBeers));
  };

  return (
    <>
      <Card variant='outlined' className={cardStyle}>
        <CardActionArea className={cardContentStyle}>
          <CardContent>
            <Typography className={beerNameStyle} variant='h6' color='textPrimary' gutterBottom>
              {beer.name}
            </Typography>
            <FavouriteWrapper isFavourite={beer.favourite} onChange={favouriteHandler} />

            <Typography className={beerTaglineStyle} variant='caption' color='textSecondary' display='block' gutterBottom>
              {beer.tagline}
            </Typography>

            <CardMedia className={beerImageStyle} component='img' alt={beer.name} image={beer.image_url} title={beer.name} onClick={clickHandler} />
          </CardContent>
        </CardActionArea>
        <CardActions className={cardActionsStyle}>
          <RatingWrapper rating={beer.rating} onChange={ratingHandler} />
        </CardActions>
        <CardActions className={cardActionsStyle}>
          <Button color='primary' variant='outlined' onClick={clickHandler}>
            <Typography>See Details</Typography>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default BeerCard;
