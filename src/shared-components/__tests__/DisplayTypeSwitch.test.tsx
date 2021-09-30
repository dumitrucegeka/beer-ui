import React from 'react';
import { create } from 'react-test-renderer';
import DisplayTypeSwitch from '../DisplayTypeSwitch';

test('Given DisplayTypeSwitch component then should render', () => {
  const appRoot = create(<DisplayTypeSwitch />).root;

  expect(appRoot).toBeDefined();
});
