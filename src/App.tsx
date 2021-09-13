import './App.css'
import BeerList from './screens/beer-list/BeerList'
import Search from './components/Search'
import { ChangeEvent, useState, useEffect } from 'react'

function App () {
  const [currentSearch, setCurrentSearch] = useState('')
  const [listContent, setListContent] = useState([])

  const handleSearch = (event: ChangeEvent) => {
    const searchedValue = (event.target as HTMLInputElement).value
    console.log({ searchedValue })

    setCurrentSearch(searchedValue)
  }

  useEffect(() => {
    fetch('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then((result) => setListContent(result))
  })

  return (
    <div className="App">
      <h1>$PLACEHOLDER</h1>

      <Search selectedValue={currentSearch} onChange={handleSearch}></Search>

      <BeerList beers={listContent}></BeerList>
    </div>
  )
}

export default App
