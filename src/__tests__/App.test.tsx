import React from 'react';
import { create } from 'react-test-renderer';
import App from '../App';

test('Given App component then should render', () => {
  const appRoot = create(<App />).root;

  expect(appRoot).toBeDefined();
});
