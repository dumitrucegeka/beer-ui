import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions, CardMedia, createStyles, makeStyles, Theme } from '@material-ui/core';
import { Beer } from '../../../../models/Beer.interface';
import RatingWrapper from '../../../../shared-components/Rating';
import FavouriteWrapper from '../../../../shared-components/Favourite';
import PersistanceService from '../../../../services/PersistanceService';

interface BeerCardProps {
  beer: Beer;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '1rem',
    },
    cardActionsStyle: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    cardActionAreaStyle: {
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'column',
      display: 'flex',
    },
    beerImageStyle: {
      height: '20rem',
      width: '10rem',
      objectFit: 'contain',
      margin: '1rem auto 0 auto',
    },
    textCenterAlignment: {
      minHeight: '8ex',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);

const BeerCard = (props: BeerCardProps) => {
  const history = useHistory();
  const { beer } = props;
  const { card, textCenterAlignment, cardActionAreaStyle, cardActionsStyle, beerImageStyle } = useStyles();

  const clickHandler = useCallback(() => {
    history.push(`/beers/${beer.id}`, { beerId: beer.id });
  }, [history, beer]);

  const ratingHandler = useCallback((rating: number) => {
    beer.rating = rating;
    PersistanceService.persistRating(beer, rating);
  }, []);

  const favouriteHandler = useCallback((isFavourite: boolean) => {
    beer.favourite = isFavourite;
    PersistanceService.persistFavourite(beer, isFavourite);
  }, []);

  return (
    <>
      <Card variant='outlined' className={card}>
        <CardContent className={cardActionAreaStyle}>
          <CardContent>
            <Typography className={textCenterAlignment} variant='body1' color='textPrimary' gutterBottom>
              {beer.name}
            </Typography>

            <FavouriteWrapper isFavourite={beer.favourite} onChange={favouriteHandler} />

            <Typography className={textCenterAlignment} variant='caption' color='textSecondary' display='block' gutterBottom>
              {beer.tagline}
            </Typography>

            <CardMedia className={beerImageStyle} component='img' alt={beer.name} image={beer.image_url} title={beer.name} onClick={clickHandler} />
          </CardContent>
        </CardContent>

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
