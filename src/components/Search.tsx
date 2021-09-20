import { debounce } from 'lodash'
import React, { ChangeEvent, memo, useMemo } from 'react'

export interface SearchProps {
  // eslint-disable-next-line no-unused-vars
  onChange: (event: ChangeEvent) => void;
}

const Search = (props: SearchProps) => {
  const { onChange } = props
  const changeHandler = useMemo(() => debounce(onChange, 500), [onChange])

  return (<input onChange={changeHandler} />)
}

export default memo(Search)
