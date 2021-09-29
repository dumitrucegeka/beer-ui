import React, { createContext } from 'react';
import DisplayType from '../models/DisplayType.enum';

const DisplayTypeContext = createContext({
  displayType: DisplayType.LIST,
  toggleDisplayType: () => {},
});

DisplayTypeContext.displayName = 'DisplayTypeContext';

export default DisplayTypeContext;
