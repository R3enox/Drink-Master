import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectDrinksIsLoading,
  drinksSelector,
} from '../../redux/drinks/drinksSelector';
import { getDrinks } from '../../redux/drinks/operations';
import { DrinkCardPreview } from './DrinkCardPreview';
const categories = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee/Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer, Soft Drink',
];

export const PreviewDrinks = () => {
  const drinks = useSelector(drinksSelector);
  const isLoading = useSelector(selectDrinksIsLoading);
  const dispatch = useDispatch();
  //   console.log(drinks);
  useEffect(() => {
    dispatch(getDrinks());
    // диспатч категорий
  }, [dispatch]);
  return isLoading ? (
    <div>Please wait</div>
  ) : (
    <ul>
      {categories.map((category) => (
        <li key={category}>
          <strong>{category}</strong>
          <ul className="categoryListDrink">
            {drinks.map(
              (drink) =>
                category === drink.category && (
                  <DrinkCardPreview key={drink.id} drink={drink} />
                )
              //   <li key={drink.id}>
              //     <img src={drink.drinkThumb} alt={drink} width="335px" />
              //     <p>{drink.drink}</p>
              //     <a href="">See more</a>
              //   </li>
              // )
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
};
