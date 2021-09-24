import React from 'react';
import { create } from 'react-test-renderer';
import Sidemenu from '../Sidemenu';

test('Given Sidemenu component then should render', () => {
  const appRoot = create(<Sidemenu />).root;

  expect(appRoot).toBeDefined();
});
