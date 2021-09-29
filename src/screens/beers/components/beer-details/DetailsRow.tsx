import React, { memo } from 'react';
import { createStyles, makeStyles, Paper, Theme, Typography, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import mappings from '../../../../models/BeerDetailsKeyMappings';
import StyleProps from '../../../../models/StyleProps.interface';

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
    },
    withBorder: {
      borderRadius: '2rem',
    },
    withoutBorder: {
      border: 'none',
    },
    withPadding: {
      padding: '1rem',
    },
    withoutPadding: {
      padding: 'none',
    },
  })
);

const DetailsRow = (props: { propertyName: string; propertyValue: any; styleClasses?: StyleProps }) => {
  const { beerDetailContainer, withBorder, withoutBorder, withPadding, withoutPadding } = useStyles();
  const { propertyName, propertyValue, styleClasses } = props;
  const borderStyle = styleClasses?.border ? withBorder : withoutBorder;
  // const paddingStyle = styleClasses?.padding ? withPadding : withoutPadding;
  const theme = useTheme();

  return (
    <Paper className={clsx(beerDetailContainer, borderStyle, withPadding)} elevation={2}>
      <Typography variant='subtitle1' color='primary'>
        {getBeerDetailDisplayValue(propertyName)}
      </Typography>
      <Typography variant='subtitle2'>{propertyValue}</Typography>
    </Paper>
  );
};

DetailsRow.defaultProps = {
  styleClasses: {
    border: true,
    padding: true,
  },
};

export default memo(DetailsRow);
