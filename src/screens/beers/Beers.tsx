import React, { ChangeEvent, useCallback, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Search from '../../shared-components/Search';
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
import BeerApiService from '../../services/BeerApiService';

const Beers = () => {
  const { searchContainerStyle } = styles;

  const [beers, setBeers] = useState<Beer[]>([]);
  const [currentSearch, setCurrentSearch] = useState('');
  const [searchCriteria, setSearchCriteria] = useState(BeerSearchCriteria.NAME);

  const { filterType } = useContext(ListFilterContext);
  const { displayType } = useContext(DisplayTypeContext);

  const isGridView = displayType === DisplayType.GRID;

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

    // TODO: move restore calls this into an interceptor

    BeerApiService.getAll(requestConfig)
      .then((result) => PersistanceService.restoreRating(result))
      .then((result) => PersistanceService.restoreFavorites(result))
      .then((result) => setBeers(FilterService.filter(result, filterType)))
      .catch((err) => {
        toast('Could initialize the list!', { type: 'error' });
        Promise.resolve([]);
      });
  }, [currentSearch, searchCriteria, filterType]);

  return (
    <div className='App'>
      <div className={searchContainerStyle}>
        <Search onChange={handleSearch} />
        <BeerSearchCriteriaDropdown searchCriteria={searchCriteria} selectionChangeHandler={handleSelectionChange} />
      </div>
      {isGridView ? <BeersGrid beers={beers} /> : <BeerList beers={beers} />}
    </div>
  );
};

export default Beers;
