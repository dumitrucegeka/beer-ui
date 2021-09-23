import React, { createContext } from 'react';

export enum DisplayType {
  LIST = 'LIST',
  GRID = 'GRID',
}

export const DisplayTypeContext = createContext({
  displayType: DisplayType.LIST,
  toggleDisplayType: () => {},
});

DisplayTypeContext.displayName = 'DisplayTypeContext';
