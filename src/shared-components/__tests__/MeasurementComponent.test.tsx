import React from 'react';
import { Typography } from '@material-ui/core';
import { cleanup } from '@testing-library/react';
import { create, ReactTestInstance } from 'react-test-renderer';
import Measurement from '../../models/Measurement.interface';
import MeasurementComponent from '../MeasurementComponent';

describe('Given MeasurementComponent ', () => {
  let appRoot: ReactTestInstance;

  beforeEach(() => {
    const measurement: Measurement = {
      value: 50,
      unit: 'g',
    };

    appRoot = create(<MeasurementComponent {...measurement} />).root;
  });

  afterEach(cleanup);

  test('then should render', () => {
    expect(appRoot).toBeDefined();
  });

  test('should render unit and value', () => {
    const elements = appRoot.findAllByType(Typography);

    expect(elements.length).toBe(2);
  });
});
