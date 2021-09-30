import React, { useContext, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import { ToastContainer } from 'react-toastify';
import SideMenuWrapper from './shared-components/SideMenuWrapper';
import ThemeService from './services/ThemeService';
import DisplayTypeContext from './context/DisplayTypeContext';
import ThemeContext from './context/ThemeContext';
import ListFilterContext from './context/ListFilterContext';
import DisplayType from './models/DisplayType.enum';
import FilterType from './models/FilterType.enum';

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
            <Router basename={process.env.PUBLIC_URL}>
              <CssBaseline />
              <SideMenuWrapper />
              <ToastContainer />
            </Router>
          </ListFilterContext.Provider>
        </DisplayTypeContext.Provider>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default App;
