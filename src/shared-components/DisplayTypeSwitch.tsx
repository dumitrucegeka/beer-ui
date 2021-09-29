import React, { useContext } from 'react';
import { FormControlLabel, Switch } from '@material-ui/core';
import DisplayTypeContext from '../context/DisplayTypeContext';
import DisplayType from '../models/DisplayType.enum';

const DisplayTypeSwitch = () => {
  const { displayType, toggleDisplayType } = useContext(DisplayTypeContext);
  const isChecked = displayType === DisplayType.GRID;

  return <FormControlLabel control={<Switch checked={isChecked} onChange={toggleDisplayType} color='primary' />} label='Grid View' />;
};

export default DisplayTypeSwitch;
