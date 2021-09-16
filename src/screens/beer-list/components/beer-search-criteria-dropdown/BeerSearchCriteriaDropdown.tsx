import React, { useCallback, useState } from 'react'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import styles from './BeerSearchCriteriaDropdown.module.css'
import BeerSearchCriteria from '../../../../models/BeerSearchCriteria.enum'

export interface BeerSearchCriteriaProps {
  searchCriteria: BeerSearchCriteria
  selectionChangeHandler: (event: any) => void
}

const BeerSearchCriteriaDropdown = (props: BeerSearchCriteriaProps) => {
  const { selectStyle, formControl } = styles
  const searchCriterias: string[] = Object.values(BeerSearchCriteria)
  const { searchCriteria, selectionChangeHandler } = props

  const hasError = useCallback(
    () => !searchCriteria || searchCriteria === BeerSearchCriteria.NONE,
    [searchCriteria],
  )

  return (
    <FormControl className={formControl} error={hasError()}>
      <InputLabel id="demo-simple-select-error-label">Search for </InputLabel>
      <Select
        className={selectStyle}
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        onChange={selectionChangeHandler}
        value={searchCriteria}
        // renderValue={(value) => `⚠️  - ${value}`}
      >
        {searchCriterias.map((criteria: string) => (
          <MenuItem value={criteria}>{criteria}</MenuItem>
        ))}
      </Select>
      {hasError() && <FormHelperText>Error</FormHelperText>}
    </FormControl>
  )
}

export default BeerSearchCriteriaDropdown
