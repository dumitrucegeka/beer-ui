import React from 'react';

import { Divider, Typography } from '@material-ui/core';
import { BrewingMethod } from '../models/BrewingMethod.interface';
import MeasurementComponent from './MeasurementComponent';

const BrewingMethodComponent = (brewingMethod: BrewingMethod) => {
  const { duration, temp } = brewingMethod;

  return (
    <>
      <Typography variant='subtitle2'> Duration: {duration || 'unset'} </Typography>
      <MeasurementComponent {...temp} />
      <Divider />
    </>
  );
};

export default BrewingMethodComponent;
