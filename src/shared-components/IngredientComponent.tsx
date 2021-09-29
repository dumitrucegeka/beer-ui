import React from 'react';

import { Divider, Typography } from '@material-ui/core';
import { Ingredient } from '../models/Ingredient.interface';
import MeasurementComponent from './MeasurementComponent';

const IngredientComponent = (ingredient: Ingredient) => {
  const { name, amount } = ingredient;

  return (
    <>
      <Typography variant='subtitle2'> {name} </Typography>
      <MeasurementComponent {...amount} />
      <Divider />
    </>
  );
};

export default IngredientComponent;
