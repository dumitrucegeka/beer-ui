import React from 'react';
import { create } from 'react-test-renderer';
import { Measurement } from '../../models/Measurement.interface';
import MeasurementComponent from '../MeasurementComponent';

test('Given MeasurementComponent then should render', () => {
  const measurement: Measurement = {
    value: 50,
    unit: 'g',
  };

  const appRoot = create(<MeasurementComponent {...measurement} />).root;

  expect(appRoot).toBeDefined();
});
