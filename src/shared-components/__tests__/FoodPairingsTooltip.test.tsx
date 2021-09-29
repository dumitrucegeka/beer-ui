import React from 'react';
import { create } from 'react-test-renderer';
import FoodPairingsTooltip from '../FoodPairingsTooltip';

test('Given FoodPairingsTooltip component then should render', () => {
  const props = { foodPairings: ['first', 'second', 'third'] };

  const appRoot = create(<FoodPairingsTooltip {...props} />).root;

  expect(appRoot).toBeDefined();
});
