import React, { useContext, useState } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import List from '@material-ui/core/List';
import { Favorite, StarRate } from '@material-ui/icons';
import { FilterType, ListFilterContext } from '../context/ListFilterContext';

const ListFilterComponent = () => {
  const filterTypeContext = useContext(ListFilterContext);
  const [filterType, setFilterType] = useState(filterTypeContext.filterType);
  const changeFilterType = (ft: FilterType) => setFilterType(ft);

  return (
    <ListFilterContext.Provider value={{ filterType, changeFilterType }}>
      <List>
        <ListItem
          button
          key='My favourites'
          onClick={() => {
            console.log('click fav');
            changeFilterType(FilterType.FAVORITES);
          }}
        >
          <ListItemIcon>
            <Favorite />
          </ListItemIcon>
          <ListItemText primary='My favourites' />
        </ListItem>
        <ListItem
          button
          key='My rated beers'
          onClick={() => {
            console.log('click rating');
            changeFilterType(FilterType.RATED);
          }}
        >
          <ListItemIcon>
            <StarRate />
          </ListItemIcon>
          <ListItemText primary='My rated beers' />
        </ListItem>
      </List>
    </ListFilterContext.Provider>
  );
};

export default ListFilterComponent;
