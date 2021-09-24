import React from 'react';
import { create } from 'react-test-renderer';
import BrewingMethodComponent from '../BrewingMethodComponent';
import { BrewingMethod } from '../../models/BrewingMethod.interface';

test('Given BrewingMethodComponent then should render', () => {
  const brewingMethod: BrewingMethod = {
    duration: 50,
    temp: {
      value: 20,
      unit: 'celsius',
    },
  };

  const appRoot = create(<BrewingMethodComponent {...brewingMethod} />).root;

  expect(appRoot).toBeDefined();
});
