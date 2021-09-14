import React, { ChangeEvent, memo } from 'react'

export interface SearchProps {
    // eslint-disable-next-line no-unused-vars
    onChange: (event: ChangeEvent) => void;
    selectedValue: string;
}

const Search = (props: SearchProps) => {
  const { selectedValue, onChange } = props

  return (<input value={selectedValue} onChange={onChange}/>)
}

export default memo(Search)
