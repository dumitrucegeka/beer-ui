import React from 'react';
import { create } from 'react-test-renderer';
import { Ingredient, Ingredients } from '../../models/Ingredient.interface';
import IngredientsComponent from '../IngredientsComponents';

test('Given IngredientsComponent then should render', () => {
  const ingredients: Ingredients = {
    malt: [
      {
        name: 'nameeee',
        amount: {
          value: 50,
          unit: 'g',
        },
        add: 'some_add',
        attribute: 'some_attr',
      },
    ] as Ingredient[],
    hops: [
      {
        name: 'stringyyy',
        amount: {
          unit: 'g',
          value: 50,
        },
        add: 'some-add',
        attribute: 'some-attr',
      },
    ] as Ingredient[],
    yeast: '1233',
  };

  const appRoot = create(<IngredientsComponent {...ingredients} />).root;

  expect(appRoot).toBeDefined();
});
