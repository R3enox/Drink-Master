import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectDrinksIsLoading,
  drinksSelector,
} from '../../redux/drinks/drinksSelector';
import { getDrinks } from '../../redux/drinks/drinksAPI';
import { DrinkCardPreview } from './DrinkCardPreview';
import { Link } from 'react-router-dom';
const categories = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other/Unknown'];

export const PreviewDrinks = () => {
  const drinks = useSelector(drinksSelector);
  const isLoading = useSelector(selectDrinksIsLoading);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrinks());
    // диспатч категорий
  }, [dispatch]);
  return isLoading ? (
    <div>Please wait</div>
  ) : (
    <div>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <strong>{category}</strong>
            <ul className="categoryListDrink">
              {drinks
                ?.filter((drink) => category === drink.category)
                .slice(0, 4)
                .map((drink) => (
                  <DrinkCardPreview key={drink._id} drink={drink} />
                ))}
            </ul>
          </li>
        ))}
      </ul>
      <br />

      <Link to="../drinks"> Other drinks</Link>
    </div>
  );
};
