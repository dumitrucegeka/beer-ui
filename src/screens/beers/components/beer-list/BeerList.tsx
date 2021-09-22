import React from 'react'
import { Beer } from '../../../../models/Beer.interface'
import BeerRow from '../beer-row/BeerRow'
import styles from './BeerList.module.css'

const BeerList = (props: { beers: Beer[] }) => {
  const { beers } = props
  const { beerListContainerStyle } = styles

  return (
    <div className={beerListContainerStyle}>
      {beers?.map((beer) => (
        <BeerRow key={beer.id} beer={beer} />
      ))}
    </div>
  )
}

export default BeerList
