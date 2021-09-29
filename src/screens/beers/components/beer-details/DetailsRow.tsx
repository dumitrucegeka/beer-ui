import React, { memo } from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import mappings from '../../../../models/BeerDetailsKeyMappings';

function getBeerDetailDisplayValue(beerDetailKey: string): string {
  const mapping = mappings[beerDetailKey];
  return mapping || beerDetailKey;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    beerDetailContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
      justifyContent: 'start',
      margin: '1rem 1rem 2rem 0rem',
      border: '1px solid lightblue',
      borderRadius: '2rem',
      padding: '1rem',
    },
  })
);

const DetailsRow = (props: { propertyName: string; propertyValue: any }) => {
  const { beerDetailContainer } = useStyles();
  const { propertyName, propertyValue } = props;

  return (
    <div className={beerDetailContainer}>
      <Typography variant='subtitle1'>{getBeerDetailDisplayValue(propertyName)}</Typography>
      <Typography variant='subtitle2'>{propertyValue}</Typography>
    </div>
  );
};

export default memo(DetailsRow);
