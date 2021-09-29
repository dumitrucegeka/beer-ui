import { Beer } from '../models/Beer.interface';
import Measurement from '../models/Measurement.interface';
import { BrewingMethod } from '../models/BrewingMethod.interface';
import { Ingredients } from '../models/Ingredient.interface';

const BeerService = {
  createDefaultObject(): Beer {
    return {
      id: -1,
      tagline: '',
      food_pairing: [],
      name: '',
      rating: 0,
      first_brewed: '',
      favourite: false,
      abv: 0,
      image_url: '',
      ibu: 0,
      ebc: 0,
      srm: 0,
      attenuation_level: 0,
      brewers_tips: '',
      boil_volume: {} as Measurement,
      volume: {} as Measurement,
      contributed_by: '',
      description: '',
      ph: 0,
      ingredients: {} as Ingredients,
      method: {} as BrewingMethod,
      target_fg: 0,
      target_og: 0,
    } as Beer;
  },
};

export default BeerService;
