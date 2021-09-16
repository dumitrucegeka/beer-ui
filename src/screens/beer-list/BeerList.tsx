import axios from 'axios'
import React, { ChangeEvent, useEffect, useState } from 'react'

import Search from '../../components/Search'
import { Beer } from '../../models/Beer.interface'
import styles from './BeerList.module.css'
import BeerRow from './components/beer-row/BeerRow'
import BeerSearchCriteriaDropdown from './components/beer-search-criteria-dropdown/BeerSearchCriteriaDropdown'

const BeerList = () => {
  const { beerListContainer, searchContainerStyle } = styles

  const [beers, setBeers] = useState<Beer[]>([])
  const [currentSearch, setCurrentSearch] = useState('')

  const handleSearch = (event: ChangeEvent) => {
    const searchedValue = (event.target as HTMLInputElement).value
    setCurrentSearch(searchedValue)
  }

  useEffect(() => {
    const requestConfig = currentSearch
      ? { params: { beer_name: currentSearch } }
      : undefined

    axios
      .get('https://api.punkapi.com/v2/beers', requestConfig)
      .then((result) => result.data)
      .then((result) => setBeers(result))
  }, [currentSearch])

  return (
    <div className="App">
      <h1>$PLACEHOLDER</h1>

      <div className={searchContainerStyle}>
        <Search onChange={handleSearch} />
        <BeerSearchCriteriaDropdown />
      </div>

      <div className={beerListContainer}>
        {beers?.map((beer) => (
          <BeerRow key={beer.id} {...beer} />
        ))}
      </div>
    </div>
  )
}

export default BeerList
