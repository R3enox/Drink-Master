import { DrinkCardPreview } from './DrinkCardPreview';
import { useDispatch, useSelector } from 'react-redux';
import {
  drinksSelector,
  selectDrinksIsLoading,
} from '../../redux/drinks/drinksSelector';
import { useEffect } from 'react';
import { filterDrinks, getDrinks } from '../../redux/drinks/operations';
import { Paginator } from './Paginator';

export const Drinks = ({ filters }) => {
  const drinks = useSelector(drinksSelector);
  const isLoading = useSelector(selectDrinksIsLoading);

  const dispatch = useDispatch();
  useEffect(() => {
    Object.keys(filters).length > 0 && dispatch(filterDrinks(filters));
  }, [dispatch, filters]);
  useEffect(() => {
    dispatch(getDrinks());
  }, [dispatch]);

  return (
    <div>
      {drinks.length > 0 && (
        <ul className="categoryListDrink">
          {/* delete slice after paginator realization */}
          {drinks
            // .slice(0, 9)
            .map((drink) => (
              <DrinkCardPreview key={drink._id} drink={drink} />
            ))}
        </ul>
      )}
      {drinks.length === 0 && !isLoading && <p>Заглушка для пустого фильтра</p>}
      <br />
      <Paginator />
    </div>
  );
};
