import Measurement from './Measurement.interface';

export interface Ingredient {
  name: string;
  amount: Measurement;
  add?: string;
  attribute?: string;
}

export type IngredientType = 'malt' | 'hops' | 'yeast';

export type Ingredients = {
  [key in IngredientType]: Ingredient[] | string;
};
