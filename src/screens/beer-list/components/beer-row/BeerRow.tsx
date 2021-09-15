import { Beer } from '../../../../models/Beer.interface'
import React, { Fragment } from 'react'
import styles from './BeerRow.module.css'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom';
import { CardActionArea, CardActions, CardMedia } from '@material-ui/core'

const BeerRow = (beer: Beer) => {
  const { card, beerImageStyle, beerNameStyle, beerTaglineStyle } = styles
  // const history = useHistory();
  
  // const clickHandler = useCallback((event: any) => {
  //   console.log(event)
  //   console.log({beer})
  //   history.push(`/beers/${beer.id}`, { beer: beer })
  //  }, [history, beer])
  
  return (

    <Fragment>
      <Card className={card} /*onClick={clickHandler}*/>
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
            />
          </CardContent>

        </CardActionArea>
        <CardActions>
            <Link color="primary" to={{ pathname: `/beers/${beer.id}`, state: { beer: {...beer} } }}>blablu</Link>
        </CardActions>
      </Card>
    </Fragment>
  )
}

export default BeerRow
