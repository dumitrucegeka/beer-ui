import { debounce } from 'lodash';
import React, { ChangeEvent, memo, useMemo } from 'react';
import TextField from '@material-ui/core/TextField';

export interface SearchProps {
  onChange: (event: ChangeEvent) => void;
}

const Search = (props: SearchProps) => {
  const { onChange } = props;
  const changeHandler = useMemo(() => debounce(onChange, 500), [onChange]);

  return <TextField label='Search' onChange={changeHandler} />;
};

export default memo(Search);
