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
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token) return;
    dispatch(getDrinks());
    // диспатч категорий
  }, [dispatch, token]);
  return isLoading ? (
    <div>Please wait</div>
  ) : (
    <div className="flex flex-col gap-[60px] md:gap-[80px] ">
      <ul className="flex flex-col gap-[40px] md:gap-[80px] ">
        {categories.map((category) => (
          <li key={category}>
            <p className="font-semibold text-[28px] md:text-[40px] leading-[1.14] md:leading-[1.1] pb-[24px] md:pb-[40px]">
              {category}
            </p>
            <ul className="flex flex-wrap flex-row md:gap-[20px] overflow-hidden h-[392px] md:h-[398px] lg:h-[438px]">
              {drinks
                .filter((drink) => category === drink.category)
                .map((drink) => (
                  <DrinkCardPreview key={drink._id} drink={drink} />
                ))}
            </ul>
          </li>
        ))}
      </ul>
      <Link
        to="/drinks"
        className="inline-block mx-auto px-[40px] py-[14px] md:px-[44px] md:py-[18px] font-semibold text-[14px] leading-[1.28] md:text-[16px] md:leading-[1.25] bg-primary-text-color text-primary-text-button-color text-center hover:text-primary-text-color hover:bg-transparent hover:border-[1px] border-border-color rounded-[42px] mb-[80px] md:mb-[140px]"
      >
        Other drinks
      </Link>
    </div>
  );
};
