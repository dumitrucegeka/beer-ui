import React from 'react';

import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import BeerCard from '../beer-card/BeerCard';
import { Beer } from '../../../../models/Beer.interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    beerListContainerStyle: {
      margin: '5% 12% 5% 12%',
      display: 'grid',
      maxWidth: '100%',
      gridTemplateColumns: 'repeat(auto-fit, minmax(22em, 1fr))',
    },
    noResults: {
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20vh',
    },
  })
);

const BeerList = (props: { beers: Beer[] }) => {
  const { beers } = props;

  const { beerListContainerStyle, noResults } = useStyles();

  return beers?.length ? (
    <div className={beerListContainerStyle}>
      {beers?.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  ) : (
    <div className={noResults}>
      <Typography variant='h3' color='textSecondary'>
        No results found!
      </Typography>
    </div>
  );
};

export default BeerList;
