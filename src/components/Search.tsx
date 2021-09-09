import { ChangeEvent, memo } from 'react';

export interface SearchProps {
    onChange: (event: ChangeEvent) => void;
    selectedValue: string;
}

const Search = (props: SearchProps) => {
    const { selectedValue, onChange } = props
    
    return (<input value={selectedValue} onChange={onChange}></input>)
}

export default memo(Search);