import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { DisplayType, DisplayTypeContext } from './context/DisplayTypeContext';
import Sidemenu from './components/Sidemenu';
import { FilterType, ListFilterContext } from './context/ListFilterContext';
import ThemeService from './services/ThemeService';
import ThemeContext from './context/ThemeContext';
// import MultipleFilterContext from './context/MultipleFilterContext';

const App = () => {
  const displayTypeContext = useContext(DisplayTypeContext);
  const themeContext = useContext(ThemeContext);
  // const multipleFilterContext = useContext(MultipleFilterContext);
  const filterTypeContext = useContext(ListFilterContext);

  const [displayType, setDisplayType] = useState<DisplayType>(displayTypeContext.displayType);
  const [filterType, setFilterType] = useState<FilterType>(filterTypeContext.filterType);
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(themeContext.isDarkTheme);
  const [currentTheme, setCurrentTheme] = useState(ThemeService.createDarkTheme(themeContext.isDarkTheme));
  // const [isMultipleFilter, setIsMultipleFilter] = useState(multipleFilterContext.isMultipleFilter);

  const toggleDisplayType = () => {
    setDisplayType(displayType === DisplayType.GRID ? DisplayType.LIST : DisplayType.GRID);
  };

  const changeFilterType = (filter: FilterType) => {
    setFilterType(filter);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // const toggleMultipleFilter = () => {
  //   setIsMultipleFilter(!isMultipleFilter);
  // };

  useEffect(() => {
    setCurrentTheme(ThemeService.createDarkTheme(isDarkTheme));
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ThemeProvider theme={currentTheme}>
        <DisplayTypeContext.Provider value={{ displayType, toggleDisplayType }}>
          {/* <MultipleFilterContext.Provider value={{ isMultipleFilter, toggleMultipleFilter }}> */}
          <ListFilterContext.Provider value={{ filterType, changeFilterType }}>
            <CssBaseline />

            <Sidemenu />
          </ListFilterContext.Provider>
          {/* </MultipleFilterContext.Provider> */}
        </DisplayTypeContext.Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
