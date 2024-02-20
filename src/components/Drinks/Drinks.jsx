import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DrinkCardPreview } from '../reUseComponents/DrinkCardPreview';
import { Paginator } from './Paginator';
import {
  selectDrinks,
  selectDrinksIsLoading,
} from '../../redux/drinks/drinksSelector';
import { filterDrinks } from '../../redux/drinks/drinksAPI';
import { useDrinkFilters } from '../../hooks/useDrinkFilters';

export const Drinks = () => {
  const dispatch = useDispatch();
  const { keyName, category, ingredient } = useDrinkFilters();
  const drinks = useSelector(selectDrinks);
  const isLoading = useSelector(selectDrinksIsLoading);

  useEffect(() => {
    const searchParams = new URLSearchParams();
    if (keyName) searchParams.set('keyName', keyName);
    if (category) searchParams.set('category', category);
    if (ingredient) searchParams.set('ingredient', ingredient);

    dispatch(filterDrinks(searchParams));
  }, [keyName, category, ingredient, dispatch]);

  const drinksAreNotFinded = !isLoading && drinks?.length === 0;

  return (
    <div className="pt-[40px]">
      {drinks?.length > 0 && (
        <ul className="flex flex-wrap flex-col md:flex-row gap-[28px] md:gap-x-[20px] md:gap-y-[40px] lg:gap-y-[80px]">
          {/* delete slice after paginator realization */}
          {drinks.slice(0, 9).map((drink) => (
            <DrinkCardPreview key={drink._id} drink={drink} />
          ))}
        </ul>
      )}
      {drinksAreNotFinded ? <p>Заглушка для пустого фильтра</p> : <Paginator />}
      <br />
    </div>
  );
};
