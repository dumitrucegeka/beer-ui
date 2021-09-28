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

  restoreRating(apiData: Beer[]): Beer[] {
    const beersArray = [...apiData];
    const ratedStorageKey = 'rated-beers';
    const persistedRated: { [key: string]: Beer } = JSON.parse(localStorage.getItem(ratedStorageKey) as string);
    if (persistedRated) {
      Object.entries(persistedRated).forEach(([key, value]) => {
        const beer = beersArray.find((b) => b.id === +key);
        if (beer) {
          beer.rating = value.rating;
        }
      });
    }
    return beersArray;
  },

  restoreFavorites(apiData: Beer[]): Beer[] {
    const result = [...apiData];
    const favouriteStorageKey = 'favourite-beers';
    const persistedFavourites: { [key: string]: Beer } = JSON.parse(localStorage.getItem(favouriteStorageKey) as string);
    if (persistedFavourites) {
      Object.entries(persistedFavourites).forEach(([key, value]) => {
        const beer = result.find((b) => b.id === +key);
        if (beer) {
          beer.favourite = value.favourite;
        }
      });
    }
    return result;
  },
};

export default PersistanceService;
