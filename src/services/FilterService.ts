import { FilterType } from '../context/ListFilterContext';
import { Beer } from '../models/Beer.interface';

const FilterService = {
  filter(allBeers: Beer[], filterType: FilterType): Beer[] {
    let filteredBeers: Beer[] = [];
    console.log(filterType);
    switch (filterType) {
      case FilterType.ALL:
        filteredBeers = [...allBeers];
        break;
      case FilterType.FAVORITES:
        filteredBeers = allBeers.filter((b) => b.favourite);
        break;
      case FilterType.RATED:
        filteredBeers = allBeers.filter((b) => b.rating != null);
        break;
      default:
        filteredBeers = [...allBeers];
    }
    return filteredBeers;
  },
};

export default FilterService;
