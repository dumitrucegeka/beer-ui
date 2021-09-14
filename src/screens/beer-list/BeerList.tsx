import { Beer } from '../../models/Beer.interface'
import styles from './BeerList.module.css'
import BeerRow from './components/beer-row/BeerRow'
import React from 'react';

export interface BeerListProps {
    beers: Beer[];
}

const BeerList = (props: BeerListProps) => {
  const { beerListContainer } = styles
  const { beers } = props

  return (
        <div className={beerListContainer}>
            {beers?.map((beer) => <BeerRow key={beer.id} {...beer}/>)}
        </div>
  )
}

export default BeerList
