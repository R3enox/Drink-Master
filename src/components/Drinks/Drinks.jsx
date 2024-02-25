import { DrinkCardPreview } from '../reUseComponents/DrinkCardPreview';
import { Paginator } from '../reUseComponents/Paginator/Paginator';
import { useDrinkFilters } from 'hooks/useDrinkFilters';
import { usePagination } from 'hooks/usePagination';
import { DrinksLimit } from 'constants/paginationLimits';
import { DrinkImageComponent } from '../reUseComponents/DrinkImageComponent';
import { useEffect } from 'react';
import { filterDrinks } from '../../redux/drinks/drinksAPI';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectDrinks,
  selectDrinksIsLoading,
  selectTotalCount,
} from '../../redux/drinks/drinksSelector';

export const Drinks = () => {
  const dispatch = useDispatch();
  const { page, per_page, countPagesOfPagination, setPage } =
    usePagination(DrinksLimit);
  const { search, category, ingredient } = useDrinkFilters();

  const data = useSelector(selectDrinks);
  const totalCount = useSelector(selectTotalCount);

  const isLoading = useSelector(selectDrinksIsLoading);

  useEffect(() => {
    const searchParams = new URLSearchParams({ page, per_page });
    if (search) searchParams.set('search', search);
    if (category) searchParams.set('category', category);
    if (ingredient) searchParams.set('ingredient', ingredient);

    dispatch(filterDrinks(searchParams));
  }, [page, per_page, search, category, ingredient, dispatch]);

  const drinksAreNotFinded = !isLoading && totalCount === 0;

  return (
    <div className="mt-[40px]">
      {totalCount > 0 && (
        <>
          <ul className="flex flex-wrap flex-col md:flex-row gap-[28px] md:gap-x-[20px] md:gap-y-[40px] lg:gap-y-[80px]">
            {data.map((drink) => (
              <DrinkCardPreview key={drink._id} drink={drink} />
            ))}
          </ul>
          <Paginator
            totalCount={totalCount}
            itemsPerPage={per_page}
            setPage={setPage}
            forcePage={page}
            initialPage={page}
            countPagesOfPagination={countPagesOfPagination}
          />
        </>
      )}
      {drinksAreNotFinded && (
        <DrinkImageComponent
          description={'We did not find any drinks for you'}
        />
      )}
      <br />
    </div>
  );
};
