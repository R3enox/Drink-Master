import { DrinkCardPreview } from '../reUseComponents/DrinkCardPreview';
// import { useDispatch, useSelector } from 'react-redux';
// import {
//   drinksSelector,
//   selectDrinksIsLoading,
// } from '../../redux/drinks/drinksSelector';
// import { useEffect } from 'react';
import { useFilterDrinksQuery } from '../../redux/drinks/drinksAPI';
import { Paginator } from './Paginator';

export const Drinks = ({ filters }) => {
  // const drinks = useSelector(drinksSelector);
  // const isLoading = useSelector(selectDrinksIsLoading);
  const { data, isLoading } = useFilterDrinksQuery(filters);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(useFilterDrinksQuery(filters));
  // }, [dispatch, filters]);

  return isLoading ? (
    <div>Loading</div>
  ) : (
    data && (
      <div className="pt-[40px]">
        {data.length > 0 && (
          <ul className="flex flex-wrap flex-col md:flex-row gap-[28px] md:gap-x-[20px] md:gap-y-[40px] lg:gap-y-[80px]">
            {/* delete slice after paginator realization */}
            {data.slice(0, 9).map((drink) => (
              <DrinkCardPreview key={drink._id} drink={drink} />
            ))}
          </ul>
        )}
        {data.length === 0 && !isLoading && <p>Заглушка для пустого фильтра</p>}
        <br />
        <Paginator />
      </div>
    )
  );
};
