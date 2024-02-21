import { useSearchParams } from 'react-router-dom';

export const useDrinkFilters = () => {
  const [params, setParams] = useSearchParams();
  const keyName = params.get('keyName') ?? '';
  const category = params.get('category') ?? '';
  const ingredient = params.get('ingredient') ?? '';

  const setDrinkFilter = (key, value) => {
    params.set(key, value);
    setParams(params);
  };

  const resetDrinkFilters = () => {
    setParams({ keyName: '', category: '', ingredient: '' });
  };

  return { keyName, category, ingredient, setDrinkFilter, resetDrinkFilters };
};
