import React from 'react';
import { Beer } from '../../../../models/Beer.interface';
import styles from './BeerList.module.css';
import BeerCard from '../beer-card/BeerCard';

const BeerList = (props: { beers: Beer[] }) => {
  const { beers } = props;
  const { beerListContainerStyle } = styles;

  return (
    <div className={beerListContainerStyle}>
      {beers?.map((beer) => (
        <BeerCard key={beer.id} beer={beer} />
      ))}
    </div>
  );
};

export default BeerList;
