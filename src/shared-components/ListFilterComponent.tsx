import React, { useCallback, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { createStyles, List, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import { Favorite, StarRate, ViewHeadline } from '@material-ui/icons';
import ListFilterContext from '../context/ListFilterContext';
import FilterType from '../models/FilterType.enum';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    active: {
      backgroundColor: theme.palette.primary.light,
    },
    inactive: {
      backgroundColor: theme.palette.background.paper,
    },
  })
);

const ListFilterComponent = () => {
  const { filterType, changeFilterType } = useContext(ListFilterContext);
  const { active, inactive } = useStyles();
  const history = useHistory();

  const onFilter = useCallback(
    (event: any) => {
      const filtersType = event;
      changeFilterType(filtersType as FilterType);
      history.push('/beers');
    },
    [history, changeFilterType]
  );

  return (
    <List>
      <ListItem className={filterType === FilterType.ALL ? active : inactive} button key='All' onClick={() => onFilter(FilterType.ALL)}>
        <ListItemIcon>
          <ViewHeadline />
        </ListItemIcon>

        <ListItemText primary='See All' />
      </ListItem>

      <ListItem className={filterType === FilterType.FAVORITES ? active : inactive} button key='My favourites' onClick={() => onFilter(FilterType.FAVORITES)}>
        <ListItemIcon>
          <Favorite />
        </ListItemIcon>

        <ListItemText primary='My favourites' />
      </ListItem>

      <ListItem className={filterType === FilterType.RATED ? active : inactive} button key='My rated beers' onClick={() => onFilter(FilterType.RATED)}>
        <ListItemIcon>
          <StarRate />
        </ListItemIcon>

        <ListItemText primary='My rated beers' />
      </ListItem>
    </List>
  );
};

export default ListFilterComponent;
