import Beer from '../models/Beer.interface';
import FilterType from '../models/FilterType.enum';

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
