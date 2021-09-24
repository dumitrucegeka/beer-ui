import React, { useContext, useState } from 'react';
import './App.css';
import { DisplayTypeContext, DisplayType } from './context/DisplayTypeContext';
import Sidemenu from './components/Sidemenu';

const App = () => {
  const displayTypeContext = useContext(DisplayTypeContext);
  const [displayType, setDisplayType] = useState(displayTypeContext.displayType);

  const toggleDisplayType = () => {
    setDisplayType(displayType === DisplayType.GRID ? DisplayType.LIST : DisplayType.GRID);
  };

  return (
    <DisplayTypeContext.Provider value={{ displayType, toggleDisplayType }}>
      <Sidemenu />
    </DisplayTypeContext.Provider>
  );
};

export default App;
