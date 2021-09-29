import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Beer from '../../../../models/Beer.interface';
import styles from './BeersGrid.module.css';
import useBeerColumns from './useBeerColumns';
import useGrid from './useDataGrid';

interface BeersGridProps {
  beers: Beer[];
}

const BeersGrid = (props: BeersGridProps) => {
  const history = useHistory();

  const { beers } = props;
  const { beersGridStyle } = styles;

  const openDetailsHandler = useCallback(
    (beerId) => {
      const beer = beers[beers.findIndex((item) => item.id === +beerId)];
      history.push(`/beers/${beer.id}`, { beer });
    },
    [history, beers]
  );

  const columns = useBeerColumns(openDetailsHandler);
  const { dataGrid } = useGrid({
    rows: beers,
    columns: columns.BEER_COLUMNS,
    classes: beersGridStyle,
    rowsPerPageOptions: [5, 10, 25, 50],
  });

  return dataGrid;
};

export default BeersGrid;
