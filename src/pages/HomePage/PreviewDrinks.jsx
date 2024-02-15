import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  selectDrinksIsLoading,
  drinksSelector,
} from '../../redux/drinks/drinksSelector';
import { getDrinks } from '../../redux/drinks/operations';
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
  console.log(drinks.length);
  useEffect(() => {
    dispatch(getDrinks());
    // диспатч категорий
  }, [dispatch]);
  return isLoading ? (
    <div>Please wait</div>
  ) : (
    <ul>
      {categories.map((category) => (
        <li key={category}>{category}</li>
      ))}
    </ul>
  );
};
