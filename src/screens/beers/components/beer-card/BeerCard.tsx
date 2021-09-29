import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActions, CardMedia, createStyles, makeStyles, Paper, Theme, useTheme } from '@material-ui/core';
import Beer from '../../../../models/Beer.interface';
import RatingWrapper from '../../../../shared-components/Rating';
import FavouriteWrapper from '../../../../shared-components/Favourite';
import PersistanceService from '../../../../services/PersistanceService';

interface BeerCardProps {
  beer: Beer;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      borderRadius: '2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      margin: '1rem',
    },
    cardActionsStyle: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      paddingBottom: '1.5rem',
      marginBottom: '1.5rem',
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
  const theme = useTheme();

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
    <Paper elevation={3} className={card}>
      <CardContent className={cardActionAreaStyle}>
        <CardContent>
          <Typography className={textCenterAlignment} variant='body1' color='primary' gutterBottom>
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

        <Button color='primary' variant='outlined' onClick={clickHandler}>
          <Typography>See Details</Typography>
        </Button>
      </CardActions>
    </Paper>
  );
};

export default BeerCard;
