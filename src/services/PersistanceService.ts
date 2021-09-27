import { Beer } from '../models/Beer.interface';

const PersistanceService = {
  persistRating(beer: Beer, rating: number): void {
    const storageKey = 'rated-beers';
    const localStorageValue = localStorage.getItem(storageKey) as string;
    const ratedBeers: { [key: number]: Beer } = JSON.parse(localStorageValue) || {};
    ratedBeers[beer.id] = beer;
    localStorage.setItem(storageKey, JSON.stringify(ratedBeers));
  },

  persistFavourite(beer: Beer, isFavourite: boolean): void {
    const storageKey = 'favourite-beers';
    const localStorageValue = localStorage.getItem(storageKey) as string;
    const favouriteBeers: { [key: number]: Beer } = JSON.parse(localStorageValue) || {};
    if (isFavourite) {
      favouriteBeers[beer.id] = beer;
    } else {
      delete favouriteBeers[beer.id];
    }

    localStorage.setItem(storageKey, JSON.stringify(favouriteBeers));
  },
};

export default PersistanceService;
