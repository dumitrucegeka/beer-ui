import React, { createContext } from 'react';

const MultipleFilterContext = createContext({
  isMultipleFilter: false,
  toggleMultipleFilter: () => {},
});

MultipleFilterContext.displayName = 'MultipleFilterContext';

export default MultipleFilterContext;
