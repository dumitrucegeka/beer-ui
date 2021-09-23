import React from 'react';
import { Beer } from '../../../../models/Beer.interface';
import styles from './BeersGrid.module.css';
import BEER_COLUMNS from './BEER_COLUMNS';
import useGrid from './useDataGrid';

interface BeersGridProps {
  beers: Beer[];
}

const BeersGrid = (props: BeersGridProps) => {
  const { beers } = props;
  const { beersGridStyle } = styles;

  const { dataGrid } = useGrid({
    rows: beers,
    columns: BEER_COLUMNS,
    classes: beersGridStyle,
    rowsPerPageOptions: [5, 10, 25, 50],
  });

  return dataGrid;
};

export default BeersGrid;
