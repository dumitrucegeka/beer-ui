import React, { createContext } from 'react';

const ThemeContext = createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

ThemeContext.displayName = 'ThemeContext';

export default ThemeContext;
