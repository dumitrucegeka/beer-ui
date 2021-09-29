import { FilterType } from '../context/ListFilterContext';
import { Beer } from '../models/Beer.interface';

const FilterService = {
  filter(allBeers: Beer[], filterType: FilterType): Beer[] {
    switch (filterType) {
      case FilterType.FAVORITES:
        return allBeers.filter((b) => b.favourite);
      case FilterType.RATED:
        return allBeers.filter((b) => b.rating != null);
      case FilterType.ALL:
      default:
        return [...allBeers];
    }
  },
};

export default FilterService;
