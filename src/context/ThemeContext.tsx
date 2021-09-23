import { createTheme } from '@material-ui/core';
import React, { createContext, useState } from 'react';

export const themes = {
  light: {
    direction: 'ltr',
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    direction: 'ltr',
    foreground: '#ffffff',
    background: '#222222',
  },
};

export const ThemeContext = createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
ThemeContext.displayName = 'ThemeContext';
