import Loader from '../Loader/Loader';
import { DrinkCardPreview } from '../reUseComponents/DrinkCardPreview';
import { getDrinks } from '../../redux/drinks/drinksAPI';
import { useFilters } from '../../hooks/useFilters';
import { getDeviceType } from '../../helpers/getDeviceType';
import { HomeDrinksLimit } from '../../constants/paginationLimits';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  selectDrinks,
  selectDrinksIsLoading,
} from '../../redux/drinks/drinksSelector';

import { useTranslation } from 'react-i18next';
import '../../i18n';
import { ButtonThemeChange } from '../reUseComponents/Buttons/ButtonThemeChange';

const popularCategories = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
];

export const PreviewDrinks = () => {
  const { t} = useTranslation();

  const data = useSelector(selectDrinks);
  const isLoading = useSelector(selectDrinksIsLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDrinks(HomeDrinksLimit[getDeviceType()]));
  }, [dispatch]);

  const { categories } = useFilters();
  const filteredCategories =
    categories &&
    popularCategories.filter((category) => categories.includes(category));

  return (
    <div className="container m-auto conflex flex-col gap-[60px] pb-[80px] md:gap-[80px] pt-[56px] md:pt-[61px] md:pb-[140px] lg:pt-[80px]">
      {isLoading && <Loader isStatic />}
      {data.length > 0 && !isLoading && (
        <ul className="flex flex-col gap-[40px] mb-[60px] md:gap-[80px] md:mb-[80px]">
          {filteredCategories.map((category) => (
            <li key={category}>
              <p className="font-semibold text-[28px] md:text-[40px] leading-[1.14] md:leading-[1.1] pb-[24px] md:pb-[40px]">
               {t(`categories.${category}`)}
              </p>
              <ul className="flex flex-wrap flex-row md:gap-[20px] overflow-hidden h-[392px] md:h-[398px] lg:h-[438px]">
                {data
                  .filter((drink) => category === drink.category)
                  .map((drink) => (
                    <DrinkCardPreview key={drink._id} drink={drink} />
                  ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
      <div className="flex justify-center ">
        <ButtonThemeChange
          title={t('link.PreviewDrinks.LinkDarkTheme')}
          to={'/drinks'}
        />
      </div>
    </div>
  );
};
