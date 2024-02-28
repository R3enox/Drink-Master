import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPopularDrinks } from '../../redux/popular/popularSlice';
import { getPopularDrinks } from '../../redux/popular/selectors';

import { useTranslation } from 'react-i18next';
import '../../i18n';

export const PopularDrinks = () => {
  const dispatch = useDispatch();
  const popularDrinks = useSelector(getPopularDrinks);
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language;

  useEffect(() => {
    dispatch(fetchPopularDrinks({ limit: 4 }));
  }, [dispatch]);

  return (
    <section className="pb-[80px] md:pb-[140px] lg:pb-0">
      <h2 className="font-medium text-lg mb-5  md:text-2xl md:mb-6 ">
        {t('title2.PopularDrinks')}
      </h2>
      <ul className="flex flex-col w-[336px] gap-[24px] md:w-[704px] md:flex-row md:flex-wrap md:gap-[32px] lg:flex-col lg:gap-[28px] lg:w-[313px]">
        {popularDrinks.map(
          ({ _id: id, drinkThumb, drink, description, descriptionUK }) => (
            <li key={id}>
              <a
                href={`/frontend-drink-master/drink/${id}`}
                className="flex gap-[14px] w-[336px] h-[90px] lg:w-[336px] "
              >
                <img
                  src={drinkThumb}
                  alt={drink}
                  className="w-[90px] h-[90px] rounded-[8px] object-cover scale-100 ease-in-out duration-300  hover:scale-[1.035] hover:contrast-[0.9"
                />
                <div>
                  <h3>{drink}</h3>
                  <p className="overflow-hidden h-[63px] text-hover-border-color-search dark:text-grey-text-color text-sm	leading-[143%]">
                    {currentLng === 'uk' ? descriptionUK : description}
                  </p>
                </div>
              </a>
            </li>
          )
        )}
      </ul>
    </section>
  );
};
