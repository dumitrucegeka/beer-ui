import React from 'react';
import { cleanup, render } from '@testing-library/react';
import { create, ReactTestInstance } from 'react-test-renderer';
import BeerList from '../beer-list/BeerList';
import { Typography } from '@material-ui/core';
import BeerService from '../../../../services/BeerService';

describe('Given BeerList component', () => {
  let beerListRoot: ReactTestInstance;

  beforeEach(() => {
    beerListRoot = create(<BeerList beers={[]} />).root;
  });

  afterEach(cleanup);

  test('then should render', () => {
    expect(beerListRoot).toBeDefined();
  });

  test('when empty beers list then should render no results found', () => {
    expect(beerListRoot.findAllByType(Typography).length).toBe(1);

    const { getByText, getByLabelText } = render(<BeerList beers={[]} />);
    const noElementsFoundText = getByText(/No results found!/i);

    expect(noElementsFoundText).toBeDefined();
  });

  test('when beers list is not empty then should render amount of cards equal to number of beers ', () => {
    expect(beerListRoot.findAllByType(Typography).length).toBe(1);
    const beers = [BeerService.createDefaultBeer(1, 'name1'), BeerService.createDefaultBeer(2, 'name2')];
    const { getByText, getByLabelText, getByRole } = render(<BeerList beers={beers} />);

    const first = getByText('name1');
    const second = getByText('name2');

    expect(first).toBeDefined();
    expect(second).toBeDefined();
  });
});
