import React, { useContext } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import ThemeContext from '../context/ThemeContext';

const ThemeSwitch = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);

  return <FormControlLabel control={<Switch checked={isDarkTheme} onChange={toggleTheme} color='primary' />} label='Dark Mode' />;
};

export default ThemeSwitch;
