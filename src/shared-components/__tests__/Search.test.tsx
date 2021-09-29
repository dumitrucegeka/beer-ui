import React from 'react';
import { create } from 'react-test-renderer';
import Search from '../Search';

test('Given Sidemenu component then should render', () => {
  const onChange = (event: any) => {};

  const appRoot = create(<Search onChange={onChange} />).root;

  expect(appRoot).toBeDefined();
});
