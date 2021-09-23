import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Button, CardActionArea, CardActions, CardMedia } from '@material-ui/core';
import styles from './BeerCard.module.css';
import { Beer } from '../../../../models/Beer.interface';

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

  return (
    <>
      <Card variant='outlined' className={cardStyle}>
        <CardActionArea className={cardContentStyle}>
          <CardContent>
            <Typography className={beerNameStyle} variant='h6' color='textPrimary' gutterBottom>
              {beer.name}
            </Typography>

            <Typography className={beerTaglineStyle} variant='caption' color='textSecondary' display='block' gutterBottom>
              {beer.tagline}
            </Typography>

            <CardMedia className={beerImageStyle} component='img' alt={beer.name} image={beer.image_url} title={beer.name} onClick={clickHandler} />
          </CardContent>
        </CardActionArea>

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
