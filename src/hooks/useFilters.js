import { useSelector } from 'react-redux';

import {
  selectFiltersCategories,
  selectFiltersIngredients,
  selectFiltersGlasses,
} from '../redux/filters/selectors';

export const useFilters = () => {
  const categories = useSelector(selectFiltersCategories);
  const ingredients = useSelector(selectFiltersIngredients);
  const glasses = useSelector(selectFiltersGlasses);

  return { categories, ingredients, glasses };
};
