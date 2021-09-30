import React from 'react';

import DetailsRow from '../beer-details/DetailsRow';

interface FoodPairingProps {
  pairings: string[];
}

const FoodPairing = (props: FoodPairingProps) => {
  const { pairings } = props;
  const value = pairings.join(', ');
  const detailProps = {
    propertyName: 'Food Pairing',
    propertyValue: value,
    styleClasses: {
      border: false,
    },
  };

  return pairings?.length ? <DetailsRow {...detailProps} /> : <></>;
};

export default FoodPairing;
