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

  return (
    <FormControl className={formControl}>
      <InputLabel id="demo-simple-select-error-label">Search for </InputLabel>
      <Select
        className={selectStyle}
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        onChange={selectionChangeHandler}
        value={searchCriteria}
      >
        {searchCriterias.map((criteria: string) => (
          <MenuItem value={criteria} key={criteria}>{criteria}</MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default BeerSearchCriteriaDropdown
