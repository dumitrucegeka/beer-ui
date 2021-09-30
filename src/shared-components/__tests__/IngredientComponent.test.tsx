import React from 'react';
import { create } from 'react-test-renderer';
import { Ingredient } from '../../models/Ingredient.interface';
import IngredientComponent from '../IngredientComponent';

test('Given IngredientComponent then should render', () => {
  const ingredient: Ingredient = {
    name: 'first',
    amount: {
      value: 50,
      unit: 'g',
    },
  };

  const appRoot = create(<IngredientComponent {...ingredient} />).root;

  expect(appRoot).toBeDefined();
});
