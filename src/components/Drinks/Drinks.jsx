import { DrinkCardPreview } from '../reUseComponents/DrinkCardPreview';

import { useFilterDrinksQuery } from '../../redux/drinks/drinksAPI';
// import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { Paginator } from '../reUseComponents/Paginator/Paginator';
import {
  // selectDrinks,
  // selectDrinksIsLoading,
  selectTotalCount,
} from '../../redux/drinks/drinksSelector';
// import { filterDrinks } from '../../redux/drinks/drinksAPI';
import { useDrinkFilters } from 'hooks/useDrinkFilters';
import { usePagination } from 'hooks/usePagination';
import { DrinksLimit } from 'constants/paginationLimits';

export const Drinks = () => {
  // const dispatch = useDispatch();
  const { page, limit, countPagesOfPagination, setPage } =
    usePagination(DrinksLimit);
  const { keyName, category, ingredient } = useDrinkFilters();
  // const drinks = useSelector(selectDrinks);
  const totalCount = useSelector(selectTotalCount);

  // const isLoading = useSelector(selectDrinksIsLoading);
  const searchParams = new URLSearchParams({ page, limit });
  if (keyName) searchParams.set('keyName', keyName);
  if (category) searchParams.set('category', category);
  if (ingredient) searchParams.set('ingredient', ingredient);

  const { data, isLoading } = useFilterDrinksQuery(searchParams);

  // useEffect(() => {

  //   dispatch(filterDrinks(searchParams));
  // }, [page, limit, keyName, category, ingredient, dispatch]);

  const drinksAreNotFinded = !isLoading && totalCount === 0;

  return (
    <div className="pt-[40px]">
      {data.length > 0 && (
        <ul className="flex flex-wrap flex-col md:flex-row gap-[28px] md:gap-x-[20px] md:gap-y-[40px] lg:gap-y-[80px]">
          {data.map((drink) => (
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
