import React from 'react';
import { create } from 'react-test-renderer';
import BrewingMethodComponent from '../BrewingMethodComponent';
import { BrewingMethod } from '../../models/BrewingMethod.interface';
import { Typography } from '@material-ui/core';

describe('Given BrewingMethodComponent', () => {
  test('then should render', () => {
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

  test('should render 3 information - title, measurement - unit, value', () => {
    const brewingMethod: BrewingMethod = {
      duration: 50,
      temp: {
        value: 20,
        unit: 'celsius',
      },
    };

    const appRoot = create(<BrewingMethodComponent {...brewingMethod} />).root;

    expect(appRoot.findAllByType(Typography).length).toBe(3);
  });
});
