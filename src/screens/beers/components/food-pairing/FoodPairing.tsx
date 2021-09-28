import React from 'react';

import DetailsRow from '../beer-details/DetailsRow';

interface FoodPairingProps {
  pairings: string[];
}

const FoodPairing = (props: FoodPairingProps) => {
  const { pairings } = props;

  return pairings?.length ? <DetailsRow propertyName='Food Pairing:' propertyValue={pairings.join(', ')} /> : null;
};

export default FoodPairing;
