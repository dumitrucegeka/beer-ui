import React, { useState } from 'react';
import Rating from '@mui/material/Rating';

const RatingWrapper = (props: { rating: number; onChange: (rating: number) => void }) => {
  const { rating, onChange } = props;
  const [value, setValue] = useState(+rating);
  return (
    <Rating
      name='half-rating'
      defaultValue={0}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue as number);
        onChange(newValue as number);
      }}
      precision={0.5}
    />
  );
};

export default RatingWrapper;
