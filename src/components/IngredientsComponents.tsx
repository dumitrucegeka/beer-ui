import React, { ReactNode } from 'react';

import { Tooltip, Typography } from '@material-ui/core';
import { Ingredient, Ingredients, IngredientType } from '../models/Ingredient.interface';
import IngredientComponent from './IngredientComponent';

const IngredientsComponent = (ingredients: Ingredients) => {
  const entries = Object.entries(ingredients);

  const ingredientComponents: ReactNode[] = entries.map((entry: any) => {
    const ingredientType = entry[0] as IngredientType;
    switch (ingredientType) {
      case 'hops':
      case 'malt':
        return (entry[1] as Ingredient[]).map((ingredient: Ingredient) => {
          return (
            <>
              <Typography variant='subtitle1'> {ingredientType} </Typography>
              <IngredientComponent {...ingredient} />
            </>
          );
        });
      case 'yeast':
        return (
          <>
            <Typography variant='subtitle1'> {ingredientType} </Typography>
            <Typography variant='caption'> {entry[1]} </Typography>
          </>
        );
      default:
        return [];
    }
  });

  return (
    <Tooltip disableFocusListener disableTouchListener title={ingredientComponents}>
      <Typography variant='caption'>Hover For Ingredients</Typography>
    </Tooltip>
  );
};

export default IngredientsComponent;
