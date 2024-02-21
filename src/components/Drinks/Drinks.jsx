import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DrinkCardPreview } from '../reUseComponents/DrinkCardPreview';
import { Paginator } from '../reUseComponents/Paginator/Paginator';
import {
  selectDrinks,
  selectDrinksIsLoading,
  selectTotalCount,
} from '../../redux/drinks/drinksSelector';
import { filterDrinks } from '../../redux/drinks/drinksAPI';
import { useDrinkFilters } from 'hooks/useDrinkFilters';
import { usePagination } from 'hooks/usePagination';
import { DrinksLimit } from 'constants/paginationLimits';

export const Drinks = () => {
  const dispatch = useDispatch();
  const { page, limit, countPagesOfPagination, setPage } =
    usePagination(DrinksLimit);
  const { keyName, category, ingredient } = useDrinkFilters();
  const drinks = useSelector(selectDrinks);
  const totalCount = useSelector(selectTotalCount);

  const isLoading = useSelector(selectDrinksIsLoading);

  useEffect(() => {
    const searchParams = new URLSearchParams({ page, limit });
    if (keyName) searchParams.set('keyName', keyName);
    if (category) searchParams.set('category', category);
    if (ingredient) searchParams.set('ingredient', ingredient);

    dispatch(filterDrinks(searchParams));
  }, [page, limit, keyName, category, ingredient, dispatch]);

  const drinksAreNotFinded = !isLoading && totalCount === 0;

  return (
    <div className="pt-[40px]">
      {drinks?.length > 0 && (
        <ul className="flex flex-wrap flex-col md:flex-row gap-[28px] md:gap-x-[20px] md:gap-y-[40px] lg:gap-y-[80px]">
          {drinks.map((drink) => (
            <DrinkCardPreview key={drink._id} drink={drink} />
          ))}
        </ul>
      )}
      {drinksAreNotFinded ? (
        <p>Заглушка для пустого фильтра</p>
      ) : (
        <Paginator
          totalCount={totalCount}
          itemsPerPage={limit}
          setPage={setPage}
          initialPage={page}
          countPagesOfPagination={countPagesOfPagination}
        />
      )}
      <br />
    </div>
  );
};
