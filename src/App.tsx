import './App.css'
import BeerList from './screens/beer-list/BeerList'
import Search from './components/Search'
import React, { ChangeEvent, useState, useEffect } from 'react'
import axios from 'axios'
// eslint-disable-next-line no-unused-vars

function App () {
  const [currentSearch, setCurrentSearch] = useState('')
  const [listContent, setListContent] = useState([])

  const handleSearch = (event: ChangeEvent) => {
    const searchedValue = (event.target as HTMLInputElement).value
    console.log((event.nativeEvent.target as HTMLInputElement).value);
    console.log({ searchedValue })
    setCurrentSearch(searchedValue)
  }

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(res => res.data)
      .then((result) => setListContent(result))
  }, [])

  useEffect(() => {
    console.log({ currentSearch })
    if (currentSearch) {
      const requestConfig = { params: { beer_name: currentSearch } }
      console.log({ requestConfig })

        axios.get('https://api.punkapi.com/v2/beers', requestConfig)
        .then(result => result.data)
        .then(result => setListContent(result))
    }
  }, [currentSearch])

  return (
    <div className="App">
      <h1>$PLACEHOLDER</h1>
      <Search onChange={handleSearch}/>
      <BeerList beers={listContent}/>
    </div>
  )
}

export default App
