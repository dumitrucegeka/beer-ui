import { FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@material-ui/core';
import React from 'react';

import styles from './BeerSearchCriteriaDropdown.module.css';

const BeerSearchCriteriaDropdown = (props: any) => {
  console.log(props)
  const { formControl } = styles

  const handleChange = (event: any) => {
    console.log(event)
  }

  return (
    <FormControl className={formControl} error>
      <InputLabel id="demo-simple-select-error-label">Name</InputLabel>
      <Select
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        onChange={handleChange}
        // renderValue={(value) => `⚠️  - ${value}`}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
      <FormHelperText>Error</FormHelperText>
    </FormControl>
  )
}

export default BeerSearchCriteriaDropdown
