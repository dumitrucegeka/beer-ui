import React, { useCallback, useState } from 'react'
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import styles from './BeerSearchCriteriaDropdown.module.css'

enum BeerSearchCriteria {
  FOOD_PAIRING = 'FOOD PAIRING',
  NAME = 'NAME',
  NONE = 'NONE',
}

const BeerSearchCriteriaDropdown = (props: any) => {
  const { selectStyle, formControl } = styles
  const [selectedValue, setSelectedValue] = useState(BeerSearchCriteria.NONE)
  const searchCriterias: string[] = Object.values(BeerSearchCriteria)

  const handleSelectionChange = useCallback((event: any) => {
    setSelectedValue(event.target.value)
  }, [])

  const hasError = useCallback(
    () => !selectedValue || selectedValue === BeerSearchCriteria.NONE,
    [selectedValue],
  )

  return (
    <FormControl className={formControl} error={hasError()}>
      <InputLabel id="demo-simple-select-error-label">Search for </InputLabel>
      <Select
        className={selectStyle}
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        onChange={handleSelectionChange}
        value={selectedValue}
        // renderValue={(value) => `⚠️  - ${value}`}
      >
        {searchCriterias.map((searchCriteria) => (
          <MenuItem value={searchCriteria}>{searchCriteria}</MenuItem>
        ))}
      </Select>
      {hasError() && <FormHelperText>Error</FormHelperText>}
    </FormControl>
  )
}

export default BeerSearchCriteriaDropdown
