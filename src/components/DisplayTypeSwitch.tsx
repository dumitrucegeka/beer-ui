import { FormControlLabel, Switch } from '@material-ui/core';
import React from 'react';
import { DisplayType, DisplayTypeContext } from '../context/DisplayTypeContext';

const DisplayTypeSwitch = () => {
  return (
    <DisplayTypeContext.Consumer>
      {({ displayType, toggleDisplayType }) => {
        const isChecked = displayType === DisplayType.GRID;

        return (
          <FormControlLabel
            control={<Switch checked={isChecked} onChange={toggleDisplayType} color='primary' inputProps={{ 'aria-label': 'checkbox with default color' }} />}
            label='Grid View'
          />
        );
      }}
    </DisplayTypeContext.Consumer>
  );
};

export default DisplayTypeSwitch;
