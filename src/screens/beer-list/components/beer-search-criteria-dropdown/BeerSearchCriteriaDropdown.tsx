import React, { useCallback } from 'react'
import { FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@material-ui/core'

import { BeerSearchCriteria } from '../../../../models/BeerSearchCriteria.enum'
import styles from './BeerSearchCriteriaDropdown.module.css'

export interface BeerSearchCriteriaProps {
  searchCriteria: BeerSearchCriteria
  selectionChangeHandler: (event: any) => void
}

const BeerSearchCriteriaDropdown = (props: BeerSearchCriteriaProps) => {
  const { selectStyle, formControl } = styles
  const { searchCriteria, selectionChangeHandler } = props

  const hasError = useCallback(
    () => !searchCriteria || searchCriteria === BeerSearchCriteria.NONE,
    [searchCriteria],
  )

  return (
    <FormControl variant="standard" className={formControl} error={hasError()}>
      <InputLabel id="demo-simple-select-error-label">Search for </InputLabel>
      <Select
        variant="standard"
        className={selectStyle}
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        onChange={selectionChangeHandler}
        value={searchCriteria}
      // renderValue={(value) => `⚠️  - ${value}`}
      >
        {Object.values(BeerSearchCriteria).map((criteria: string) => (
          <MenuItem key={criteria} value={criteria}>{criteria}</MenuItem>
        ))}
      </Select>
      {hasError() && <FormHelperText>Error</FormHelperText>}
    </FormControl>
  )
}

export default BeerSearchCriteriaDropdown
