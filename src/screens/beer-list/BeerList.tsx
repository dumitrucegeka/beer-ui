import { Beer } from '../../models/Beer.interface'
import styles from './BeerList.module.css'
import BeerRow from './components/beer-row/BeerRow'
import React, { ChangeEvent, useEffect, useState } from 'react';
import axios from 'axios'
import Search from '../../components/Search';


const BeerList = () => {
  const { beerListContainer } = styles

  const [beers, setBeers] = useState<Beer[]>([])
  const [currentSearch, setCurrentSearch] = useState('')

  const handleSearch = (event: ChangeEvent) => {
    const searchedValue = (event.target as HTMLInputElement).value
    console.log((event.nativeEvent.target as HTMLInputElement).value);
    console.log({ searchedValue })
    setCurrentSearch(searchedValue)
  }

  useEffect(() => {
    console.log({ currentSearch })
    if (currentSearch) {
      const requestConfig = { params: { beer_name: currentSearch } }
      console.log({ requestConfig })
      
        axios.get('https://api.punkapi.com/v2/beers', requestConfig)
        .then(result => result.data)
        .then(result => setBeers(result))
    }
  }, [currentSearch])

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(res => res.data)
      .then((result) => setBeers(result))
  }, [])

  return (
    <div className="App">
      <h1>$PLACEHOLDER</h1>

      <Search onChange={handleSearch}/>
    
      <div className={beerListContainer}>
          {beers?.map((beer) => <BeerRow key={beer.id} {...beer}/>)}
      </div>
  </div>

  )
}

export default BeerList
