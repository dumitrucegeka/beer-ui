import { FormControlLabel, Switch } from '@material-ui/core';
import { fireEvent, getByTestId, getByText, screen } from '@testing-library/dom';
import React from 'react';
import { act, render, cleanup } from '@testing-library/react';
import { create, ReactTestInstance } from 'react-test-renderer';
import ThemeContext from '../../context/ThemeContext';
import ThemeSwitch from '../ThemeSwitch';

afterEach(cleanup);

describe('Given ThemeSwitch component', () => {
  let appRoot: ReactTestInstance;

  beforeEach(() => {
    appRoot = create(<ThemeSwitch />).root;
  });
  test('then should render', () => {
    expect(appRoot).toBeDefined();
  });

  xtest('switch should change dark theme context value ', () => {
    let isDarkTheme = false;
    const setDarkTheme = jest.fn();

    const { getByRole } = render(
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: setDarkTheme,
        }}
      >
        <ThemeSwitch />
      </ThemeContext.Provider>
    );
    const switcher = getByRole('switch');
    fireEvent.change(switcher);

    // expect(setDarkTheme).toHaveBeenCalledTimes(1);
  });
});
