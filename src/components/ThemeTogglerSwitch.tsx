import { FormControlLabel, Switch } from '@material-ui/core';
import React from 'react';
import { ThemeContext, themes } from '../context/ThemeContext';

const ThemeTogglerSwitch = () => {
  // The Theme Toggler Button receives not only the theme
  // but also a toggleTheme function from the context
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => {
        const isDarkTheme = theme === themes.dark;

        return (
          <FormControlLabel
            control={<Switch checked={isDarkTheme} onChange={toggleTheme} color='primary' inputProps={{ 'aria-label': 'checkbox with default color' }} />}
            label='Dark Theme'
          />
        );
      }}
    </ThemeContext.Consumer>
  );
};

export default ThemeTogglerSwitch;
