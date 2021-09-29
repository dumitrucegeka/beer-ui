import { FormControlLabel, Switch } from '@material-ui/core';
import { fireEvent, getByTestId, getByText, screen } from '@testing-library/dom';
import { act, render, cleanup } from '@testing-library/react';
import React, { useState } from 'react';
import { create, ReactTestInstance } from 'react-test-renderer';
import ThemeContext from '../../context/ThemeContext';
import ThemeSwitch from '../ThemeSwitch';

afterEach(cleanup);

describe('Given ThemeSwitch component', () => {
  test('then should render', () => {
    const appRoot = create(<ThemeSwitch />).root;

    expect(appRoot).toBeDefined();
  });

  test('switch should change dark theme context value ', () => {
    let isDarkTheme = false;
    const setDarkTheme = jest.fn();

    const { container, asFragment, baseElement, getByText, getByDisplayValue, getByTitle } = render(
      <ThemeContext.Provider
        value={{
          isDarkTheme,
          toggleTheme: setDarkTheme,
        }}
      >
        <ThemeSwitch />
      </ThemeContext.Provider>
    );
    const { firstChild, firstElementChild } = container;
    expect(setDarkTheme).toHaveBeenCalledTimes(1);
  });
});
