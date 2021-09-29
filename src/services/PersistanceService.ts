import { Beer } from '../models/Beer.interface';

enum StorageKey {
  RATED_BEERS = 'rated-beers',
  FAVOURITE_BEERS = 'favourite-beers',
}

const PersistanceService = {
  persistRating(beer: Beer, rating: number): void {
    const localStorageValue = localStorage.getItem(StorageKey.RATED_BEERS) as string;
    const ratedBeers: { [key: number]: Beer } = JSON.parse(localStorageValue) || {};
    ratedBeers[beer.id] = beer;
    localStorage.setItem(StorageKey.RATED_BEERS, JSON.stringify(ratedBeers));
  },

  persistFavourite(beer: Beer, isFavourite: boolean): void {
    const localStorageValue = localStorage.getItem(StorageKey.FAVOURITE_BEERS) as string;
    const favouriteBeers: { [key: number]: Beer } = JSON.parse(localStorageValue) || {};
    if (isFavourite) {
      favouriteBeers[beer.id] = beer;
    } else {
      delete favouriteBeers[beer.id];
    }

    localStorage.setItem(StorageKey.FAVOURITE_BEERS, JSON.stringify(favouriteBeers));
  },

  restoreRating(apiData: Beer[]): Beer[] {
    const beersArray = [...apiData];
    const persistedRated: { [key: string]: Beer } = JSON.parse(localStorage.getItem(StorageKey.RATED_BEERS) as string);

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
    const persistedFavourites: { [key: string]: Beer } = JSON.parse(localStorage.getItem(StorageKey.FAVOURITE_BEERS) as string);

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
