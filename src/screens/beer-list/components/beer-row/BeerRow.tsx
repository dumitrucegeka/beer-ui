import React, { Fragment, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { CardActionArea, CardActions, CardMedia, IconButton } from '@material-ui/core'
import styles from './BeerRow.module.css'
import { Beer } from '../../../../models/Beer.interface'

const BeerRow = (beer: Beer) => {
  const { cardStyle, beerImageStyle, beerNameStyle, beerTaglineStyle } = styles
  const history = useHistory();

  const clickHandler = useCallback(() => {
    history.push(`/beers/${beer.id}`, { beer })
  }, [history, beer])

  return (
    <>
      <Card className={cardStyle}>
        <CardActionArea>
          <CardContent>
            <Typography className={beerNameStyle} variant="body2" color="textSecondary" component="p">
              {beer.name}
            </Typography>

            <Typography className={beerTaglineStyle} variant="body2" color="textSecondary" component="p">
              {beer.tagline}
            </Typography>

            <CardMedia
              className={beerImageStyle}
              component="img"
              alt={beer.name}
              image={beer.image_url}
              title={beer.name}
              onClick={clickHandler}
            />
          </CardContent>

        </CardActionArea>
        <CardActions>
          <IconButton onClick={clickHandler}>
            <Typography>See Details</Typography>
          </IconButton>
        </CardActions>
      </Card>
    </>
  )
}

export default BeerRow
