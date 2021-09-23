import Measurement from './Measurement.interface';

export type BrewingMethodType = 'fermentation' | 'mash_temp' | 'twist';

export interface BrewingMethod {
  duration?: number;
  temp: Measurement;
}

export type BrewingMethods = {
  [key in BrewingMethodType]: BrewingMethod | BrewingMethod[] | string;
};
