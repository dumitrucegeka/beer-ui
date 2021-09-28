import React from 'react';
import styles from './BeerDetails.module.css';
import mappings from '../../../../models/BeerDetailsKeyMappings';

function getBeerDetailDisplayValue(beerDetailKey: string): string {
  const mapping = mappings[beerDetailKey];
  return mapping || beerDetailKey;
}

const DetailsRow = (props: { propertyName: string; propertyValue: any }) => {
  const { beerDetailContainer, beerDetailTitle, beerDetailValue } = styles;
  const { propertyName, propertyValue } = props;
  return (
    <div className={beerDetailContainer}>
      <p className={beerDetailTitle}>{getBeerDetailDisplayValue(propertyName)}</p>
      <p className={beerDetailValue}>{propertyValue}</p>
    </div>
  );
};

export default DetailsRow;
