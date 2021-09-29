import React, { useContext } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import MultipleFilterContext from '../context/MultipleFilterContext';

const MultipleFilterSwitch = () => {
  const { isMultipleFilter, toggleMultipleFilter } = useContext(MultipleFilterContext);

  return <FormControlLabel control={<Switch checked={isMultipleFilter} onChange={() => toggleMultipleFilter()} color='primary' />} label='Multiple Filters' />;
};

export default MultipleFilterSwitch;
