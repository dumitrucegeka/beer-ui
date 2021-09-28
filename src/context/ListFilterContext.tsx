import React, { createContext } from 'react';

export enum FilterType {
  ALL,
  FAVORITES,
  RATED,
}

export const ListFilterContext = createContext({
  filterType: FilterType.ALL,
  changeFilterType: (filterType: FilterType) => {},
});
