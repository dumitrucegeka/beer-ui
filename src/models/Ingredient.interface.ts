import Measurement from './Measurement.interface';

export interface Ingredient {
  name: string;
  amount: Measurement;
  add?: string; // TODO
  attribute?: string; // TODO
}

export type IngredientType = 'malt' | 'hops' | 'yeast';

export type Ingredients = {
  [key in IngredientType]: Ingredient[] | string;
};
