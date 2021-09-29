import React, { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';

import axios from 'axios';
import Search from '../../components/Search';
import { Beer } from '../../models/Beer.interface';
import BeerSearchCriteria from '../../models/BeerSearchCriteria.enum';
import styles from './Beers.module.css';
import BeerList from './components/beer-list/BeerList';
import BeerSearchCriteriaDropdown from './components/beer-search-criteria-dropdown/BeerSearchCriteriaDropdown';
import BeersGrid from './components/beers-grid/BeersGrid';
import { DisplayType, DisplayTypeContext } from '../../context/DisplayTypeContext';
import { ListFilterContext } from '../../context/ListFilterContext';
import PersistanceService from '../../services/PersistanceService';
import FilterService from '../../services/FilterService';

const Beers = () => {
  const apiUrl = 'https://api.punkapi.com/v2';

  const { searchContainerStyle } = styles;

  const [beers, setBeers] = useState<Beer[]>([]);
  const [currentSearch, setCurrentSearch] = useState('');
  const [searchCriteria, setSearchCriteria] = useState(BeerSearchCriteria.NAME);

  const { filterType } = useContext(ListFilterContext);
  const { displayType } = useContext(DisplayTypeContext);

  const isGridView = displayType === DisplayType.GRID;
  console.log(' ---BEERS--- ', { filterType });

  const handleSelectionChange = useCallback((event: any) => {
    setSearchCriteria(event.target.value);
  }, []);

  const handleSearch = (event: ChangeEvent) => {
    const searchedValue = (event.target as HTMLInputElement).value;
    setCurrentSearch(searchedValue);
  };

  const getSearchParams = (searchString: string, searchCriteriaValue: BeerSearchCriteria) => {
    switch (searchCriteriaValue) {
      case BeerSearchCriteria.NAME:
        return { beer_name: searchString };
      case BeerSearchCriteria.FOOD_PAIRING:
        return { food: searchString.split(' ').join('_') };
      default:
        return null;
    }
  };

  useEffect(() => {
    const requestConfig = currentSearch ? { params: getSearchParams(currentSearch, searchCriteria) } : undefined;

    axios
      .get<Beer[]>(`${apiUrl}/beers`, requestConfig)
      .then((result) => result.data)
      .then((apiData) => {
        const ratedBeers = PersistanceService.restoreRating(apiData);
        const result = PersistanceService.restoreFavorites(ratedBeers);
        return result;
      })
      .then((result) => setBeers(FilterService.filter(result, filterType)));
  }, [currentSearch, searchCriteria, filterType]);

  return (
    <div className='App'>
      <div className={searchContainerStyle}>
        <Search onChange={handleSearch} />
        <BeerSearchCriteriaDropdown searchCriteria={searchCriteria} selectionChangeHandler={handleSelectionChange} />
      </div>
      {isGridView ? <BeersGrid beers={FilterService.filter(beers, filterType)} /> : <BeerList beers={FilterService.filter(beers, filterType)} />}
    </div>
  );
};

export default Beers;
