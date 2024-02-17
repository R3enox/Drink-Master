import { DrinkCardPreview } from './DrinkCardPreview';
import { useDispatch, useSelector } from 'react-redux';
import { drinksSelector } from '../../redux/drinks/drinksSelector';
import { useEffect } from 'react';
import { getDrinks } from '../../redux/drinks/operations';

export const DrinksList = () => {
  const drinks = useSelector(drinksSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDrinks());
  }, [dispatch]);

  return (
    <div>
      <ul className="categoryListDrink">
        {drinks.slice(0, 9).map((drink) => (
          <DrinkCardPreview key={drink._id} drink={drink} />
        ))}
      </ul>
      <br />
      <p>Pagination Section</p>
    </div>
  );
};
