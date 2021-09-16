import './App.css'
import BeerList from './screens/beer-list/BeerList'
import Search from './components/Search'
import React, { ChangeEvent, useState, useEffect } from 'react'
import axios from 'axios'

function App () {
  const [currentSearch, setCurrentSearch] = useState('')
  const [listContent, setListContent] = useState([])

  const handleSearch = (event: ChangeEvent) => {
    const searchedValue = (event.target as HTMLInputElement).value
    setCurrentSearch(searchedValue)
  }

  function getAllBeers() {
    axios.get('https://api.punkapi.com/v2/beers')
        .then(res => res.data)
        .then((result) => setListContent(result))
  }

  useEffect(() => {
    getAllBeers();
  }, [])

  function getBeerByName() {
    const requestConfig = {params: {beer_name: currentSearch}}
    console.log({requestConfig})

    axios.get('https://api.punkapi.com/v2/beers', requestConfig)
        .then(result => result.data)
        .then(result => setListContent(result))
  }

  useEffect(() => {
    console.log({ currentSearch })
    if (currentSearch) {
      getBeerByName();
    } else {
      getAllBeers()
    }
  }, [currentSearch])

  return (
    <div className="App">
      <h1>Demo beer search app</h1>
      <Search onChange={handleSearch}/>
      <BeerList beers={listContent}/>
    </div>
  )
}

export default App
