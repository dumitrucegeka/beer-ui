import React from 'react';
import { create } from 'react-test-renderer';
import ThemeTogglerSwitch from '../ThemeTogglerSwitch';

test('Given ThemeTogglerSwitch component then should render', () => {
  const appRoot = create(<ThemeTogglerSwitch />).root;

  expect(appRoot).toBeDefined();
});
