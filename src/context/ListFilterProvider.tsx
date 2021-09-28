import React, { useContext, useState } from 'react';
import { FilterType, ListFilterContext } from './ListFilterContext';

const ListFilterProvider = (props: any) => {
  const filterTypeContext = useContext(ListFilterContext);
  const [filterType, setFilterType] = useState(filterTypeContext.filterType);
  const changeFilterType = (ft: FilterType) => setFilterType(ft);
  return <ListFilterContext.Provider value={{ filterType, changeFilterType }}>{props.children}</ListFilterContext.Provider>;
};

export default ListFilterProvider;
