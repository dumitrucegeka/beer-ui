import './App.css'
import BeerList from './screens/beer-list/BeerList'
import Search from './components/Search'
import React, {ChangeEvent, useState, useEffect, useMemo} from 'react'
import axios from 'axios'
import { debounce } from 'lodash'

function App () {
  const [currentSearch, setCurrentSearch] = useState('')
  const [listContent, setListContent] = useState([])

  const handleSearch = (event: ChangeEvent) => {
    const searchedValue = (event.target as HTMLInputElement).value
    console.log(event, searchedValue)
    setCurrentSearch(searchedValue)
  }

  const searchCallback = useMemo(() => debounce(handleSearch, 1000), [currentSearch]);

  useEffect(() => {
    axios.get('https://api.punkapi.com/v2/beers')
      .then(res => res.data)
      .then((result) => setListContent(result))
  }, [])

  useEffect(() => {
    if (currentSearch) {
      const requestConfig = { params: { beer_name: currentSearch } }
      axios.get('https://api.punkapi.com/v2/beers', requestConfig).then(result => result.data).then(result => setListContent(result))
    }
  }, [currentSearch])

  return (
    <div className="App">
      <h1>$PLACEHOLDER</h1>
      <Search selectedValue={currentSearch} onChange={searchCallback}/>
      <BeerList beers={listContent}/>
    </div>
  )
}

export default App
