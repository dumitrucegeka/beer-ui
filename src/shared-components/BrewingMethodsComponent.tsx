import React, { Fragment } from 'react';

import { Divider, Tooltip, Typography } from '@material-ui/core';
import { BrewingMethod, BrewingMethods, BrewingMethodType } from '../models/BrewingMethod.interface';
import BrewingMethodComponent from './BrewingMethodComponent';

const BrewingMethodsComponent = (methods: BrewingMethods) => {
  const entries = Object.entries(methods);

  const brewingMethodComponents = entries.map((entry) => {
    const brewingMethodType = entry[0] as BrewingMethodType;

    switch (brewingMethodType) {
      case 'fermentation':
        return <BrewingMethodComponent {...(entry[1] as BrewingMethod)} />;
      case 'mash_temp':
        return (entry[1] as BrewingMethod[]).map((brewingMethod: BrewingMethod) => {
          return (
            <>
              <Typography variant='subtitle1'> {brewingMethodType} </Typography>
              <BrewingMethodComponent {...brewingMethod} />
            </>
          );
        });
      case 'twist':
        return (
          <>
            <Typography variant='subtitle1'> {brewingMethodType} </Typography>
            {(entry[1] as string)?.split(',').map((step: string) => (
              <Fragment key={step}>
                <Typography variant='caption'> {step} </Typography>
                <Divider />
              </Fragment>
            ))}
          </>
        );
      default:
        return [];
    }
  });

  return (
    <Tooltip disableFocusListener disableTouchListener title={brewingMethodComponents}>
      <Typography variant='caption'>Hover For Methods</Typography>
    </Tooltip>
  );
};

export default BrewingMethodsComponent;
