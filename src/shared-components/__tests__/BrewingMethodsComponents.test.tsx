import React from 'react';
import { create } from 'react-test-renderer';
import { BrewingMethod, BrewingMethods } from '../../models/BrewingMethod.interface';
import BrewingMethodsComponent from '../BrewingMethodsComponent';

test('Given BrewingMethodsComponent then should render', () => {
  const brewingMethods: BrewingMethods = {
    fermentation: {
      duration: 50,
      temp: {
        value: 100,
        unit: 'celsius',
      },
    } as BrewingMethod,
    mash_temp: [
      {
        duration: 50,
        temp: {
          value: 100,
          unit: 'celsius',
        },
      },
    ] as BrewingMethod[],
    twist: '1233',
  };

  const appRoot = create(<BrewingMethodsComponent {...brewingMethods} />).root;

  expect(appRoot).toBeDefined();
});
