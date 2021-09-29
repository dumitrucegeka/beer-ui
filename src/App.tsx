import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { DisplayType, DisplayTypeContext } from './context/DisplayTypeContext';
import Sidemenu from './components/Sidemenu';
import { FilterType, ListFilterContext } from './context/ListFilterContext';
import ThemeService from './services/ThemeService';
import ThemeContext from './context/ThemeContext';

const App = () => {
  const displayTypeContext = useContext(DisplayTypeContext);
  const themeContext = useContext(ThemeContext);
  const filterTypeContext = useContext(ListFilterContext);

  const [displayType, setDisplayType] = useState<DisplayType>(displayTypeContext.displayType);
  const [filterType, setFilterType] = useState<FilterType>(filterTypeContext.filterType);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(themeContext.isDarkTheme);
  const [currentTheme, setCurrentTheme] = useState(ThemeService.createDarkTheme(themeContext.isDarkTheme));

  const toggleDisplayType = () => {
    setDisplayType(displayType === DisplayType.GRID ? DisplayType.LIST : DisplayType.GRID);
  };

  const changeFilterType = (filter: FilterType) => {
    setFilterType(filter);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  useEffect(() => {
    setCurrentTheme(ThemeService.createDarkTheme(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <DisplayTypeContext.Provider value={{ displayType, toggleDisplayType }}>
          <ListFilterContext.Provider value={{ filterType, changeFilterType }}>
            <CssBaseline />

            <Sidemenu />
          </ListFilterContext.Provider>
        </DisplayTypeContext.Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
