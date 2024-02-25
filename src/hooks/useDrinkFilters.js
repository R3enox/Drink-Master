import { useSearchParams } from 'react-router-dom';

export const useDrinkFilters = () => {
  const [params, setParams] = useSearchParams();
  const search = params.get('search') ?? '';
  const category = params.get('category') ?? '';
  const ingredient = params.get('ingredient') ?? '';

  const setDrinkFilter = (key, value) => {
    if (value === '') {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    params.set('page', 1);
    setParams(params);
  };

  const resetDrinkFilters = () => {
    setParams({ search: '', category: '', ingredient: '' });
  };

  return { search, category, ingredient, setDrinkFilter, resetDrinkFilters };
};
