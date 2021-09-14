import { Beer } from '../../../../models/Beer.interface'
import React from 'react'

const BeerRow = (beer: Beer) => {
  return (
        <div>{beer.name} - {beer.tagline}</div>
  )
}

export default BeerRow
