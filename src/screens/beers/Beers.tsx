import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { FormControlLabel, Switch } from '@material-ui/core'
import axios from 'axios'
import Search from '../../components/Search'
import { Beer } from '../../models/Beer.interface'
import BeerSearchCriteria from '../../models/BeerSearchCriteria.enum'
import styles from './Beers.module.css'
import BeerList from './components/beer-list/BeerList'
import BeerSearchCriteriaDropdown from './components/beer-search-criteria-dropdown/BeerSearchCriteriaDropdown'
import BeersGrid from './components/beers-grid/BeersGrid'

const Beers = () => {
  const apiUrl = 'https://api.punkapi.com/v2'
  const { beerListContainer, searchContainerStyle } = styles

  const [beers, setBeers] = useState<Beer[]>([])
  const [currentSearch, setCurrentSearch] = useState('')
  const [searchCriteria, setSearchCriteria] = useState(BeerSearchCriteria.NAME)
  const [isGridView, setIsGridView] = useState(true)

  const handleSelectionChange = useCallback((event: any) => {
    setSearchCriteria(event.target.value)
  }, [])

  const handleSwitch = (event: any): void => {
    setIsGridView(event.target.checked)
  }

  const handleSearch = (event: ChangeEvent) => {
    const searchedValue = (event.target as HTMLInputElement).value
    setCurrentSearch(searchedValue)
  }

  const getSearchParams = (
    searchString: string,
    searchCriteriaValue: BeerSearchCriteria,
  ) => {
    switch (searchCriteriaValue) {
      case BeerSearchCriteria.NAME:
        return { beer_name: searchString }
      case BeerSearchCriteria.FOOD_PAIRING:
        return { food: searchString.split(' ').join('_') }
      default:
        return null
    }
  }

  useEffect(() => {
    const requestConfig = currentSearch
      ? { params: getSearchParams(currentSearch, searchCriteria) }
      : undefined

    axios
      .get(`${apiUrl}/beers`, requestConfig)
      .then((result) => result.data)
      .then((result) => setBeers(result))
  }, [currentSearch, searchCriteria])

  return (
    <div className="App">
      <h1>Explore the finest beers!</h1>

      <div className={searchContainerStyle}>
        <Search onChange={handleSearch} />
        <BeerSearchCriteriaDropdown
          searchCriteria={searchCriteria}
          selectionChangeHandler={handleSelectionChange}
        />

        <FormControlLabel
          control={(
            <Switch
              checked={isGridView}
              onChange={handleSwitch}
              color="primary"
              inputProps={{ 'aria-label': 'checkbox with default color' }}
            />
          )}
          label="Grid View"
        />
      </div>

      {isGridView ? <BeersGrid beers={beers} /> : <BeerList beers={beers} />}
    </div>
  )
}

export default Beers
