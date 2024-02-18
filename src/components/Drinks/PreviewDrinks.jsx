import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectDrinksIsLoading,
  drinksSelector,
} from '../../redux/drinks/drinksSelector';
import { getDrinks } from '../../redux/drinks/drinksAPI';
import { DrinkCardPreview } from '../reUseComponents/DrinkCardPreview';
import { Link } from 'react-router-dom';
import { selectAuthToken } from '../../redux/auth/authSelectors';
const categories = ['Ordinary Drink', 'Cocktail', 'Shake', 'Other/Unknown'];

export const PreviewDrinks = () => {
  const token = useSelector(selectAuthToken);
  const drinks = useSelector(drinksSelector);
  const isLoading = useSelector(selectDrinksIsLoading);
  console.log(token);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch(getDrinks());
    // диспатч категорий
  }, [dispatch, token]);
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
