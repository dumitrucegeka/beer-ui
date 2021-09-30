import React, { useMemo, useState, useEffect } from 'react';
import Rating from '@mui/material/Rating';

const RatingWrapper = (props: { rating: number; onChange: (rating: number) => void }) => {
  const { rating, onChange } = props;

  const value = useMemo(() => rating, [props]);
  const [rateValue, setRateValue] = useState(value);

  useEffect(() => {
    setRateValue(value);
  }, [value]);

  return (
    <Rating
      name='half-rating'
      defaultValue={0}
      value={rateValue}
      onChange={(event, newValue) => {
        setRateValue(newValue as number);
        onChange(newValue as number);
      }}
      precision={0.5}
    />
  );
};

export default RatingWrapper;
