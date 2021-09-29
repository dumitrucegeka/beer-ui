import React, { memo } from 'react';
import { createStyles, makeStyles, Theme, Typography } from '@material-ui/core';
import Measurement from '../models/Measurement.interface';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    measurementContainer: {
      // TODO - I want some styling or delete me
    },
  })
);

const MeasurementComponent = (measurement: Measurement) => {
  const classes = useStyles();
  const { measurementContainer } = classes;
  const { value, unit } = measurement;

  return (
    <div className={measurementContainer}>
      <Typography variant='caption'> {value} </Typography>
      <Typography variant='caption'> {unit} </Typography>
    </div>
  );
};

export default memo(MeasurementComponent);
