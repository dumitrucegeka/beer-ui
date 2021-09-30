import React, { createContext } from 'react';
import FilterType from '../models/FilterType.enum';

const ListFilterContext = createContext({
  filterType: FilterType.ALL,
  changeFilterType: (filterType: FilterType) => {},
});

export default ListFilterContext;
