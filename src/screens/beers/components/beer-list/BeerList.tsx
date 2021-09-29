import React from 'react';

import { createStyles, makeStyles, Theme } from '@material-ui/core';
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
  })
);

const BeerList = (props: { beers: Beer[] }) => {
  const { beers } = props;

  const { beerListContainerStyle } = useStyles();

  return (
    <div className={beerListContainerStyle}>
      {beers?.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default BeerList;
