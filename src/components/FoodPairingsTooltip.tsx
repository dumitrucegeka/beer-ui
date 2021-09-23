import React from 'react';
import { Tooltip, Typography, Divider } from '@material-ui/core';

const FoodPairingsTooltip = (props: { foodPairings: string[] }) => {
  const { foodPairings } = props;

  return (
    <Tooltip
      disableFocusListener
      disableTouchListener
      title={foodPairings.map((pairing: string) => (
        <div key={pairing}>
          <Typography variant='caption'>{pairing}</Typography>
          <Divider />
        </div>
      ))}
    >
      <Typography variant='caption'>Hover for details</Typography>
    </Tooltip>
  );
};

export default FoodPairingsTooltip;
