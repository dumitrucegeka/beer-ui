import React, { useContext } from 'react';
import { createStyles, ListItem, ListItemIcon, ListItemText, makeStyles, Theme } from '@material-ui/core';
import List from '@material-ui/core/List';
import { Favorite, StarRate, ViewHeadline } from '@material-ui/icons';
import { FilterType, ListFilterContext } from '../context/ListFilterContext';

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

  return (
    <List>
      <ListItem className={filterType === FilterType.ALL ? active : inactive} button key='All' onClick={() => changeFilterType(FilterType.ALL)}>
        <ListItemIcon>
          <ViewHeadline />
        </ListItemIcon>

        <ListItemText primary='See All' />
      </ListItem>

      <ListItem
        className={filterType === FilterType.FAVORITES ? active : inactive}
        button
        key='My favourites'
        onClick={() => changeFilterType(FilterType.FAVORITES)}
      >
        <ListItemIcon>
          <Favorite />
        </ListItemIcon>

        <ListItemText primary='My favourites' />
      </ListItem>

      <ListItem className={filterType === FilterType.RATED ? active : inactive} button key='My rated beers' onClick={() => changeFilterType(FilterType.RATED)}>
        <ListItemIcon>
          <StarRate />
        </ListItemIcon>

        <ListItemText primary='My rated beers' />
      </ListItem>
    </List>
  );
};

export default ListFilterComponent;
