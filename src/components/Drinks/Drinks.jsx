import { DrinkCardPreview } from '../reUseComponents/DrinkCardPreview';
import { useFilterDrinksQuery } from '../../redux/drinks/drinksAPI';
import { Paginator } from '../reUseComponents/Paginator/Paginator';
import { useDrinkFilters } from 'hooks/useDrinkFilters';
import { usePagination } from 'hooks/usePagination';
import { DrinksLimit } from 'constants/paginationLimits';
import { DrinkImageComponent } from '../reUseComponents/DrinkImageComponent';

export const Drinks = () => {
  const { page, per_page, countPagesOfPagination, setPage } =
    usePagination(DrinksLimit);
  const { search, category, ingredient } = useDrinkFilters();

  const { data, isLoading } = useFilterDrinksQuery({
    page,
    per_page,
    search,
    category,
    ingredient,
  });

  const drinksAreNotFinded = !isLoading && data.totalCount === 0;

  return (
    <div className="mt-[40px]">
      {data?.totalCount > 0 && (
        <>
          <ul className="flex flex-wrap flex-col md:flex-row gap-[28px] md:gap-x-[20px] md:gap-y-[40px] lg:gap-y-[80px]">
            {data.paginatedResult.map((drink) => (
              <DrinkCardPreview key={drink._id} drink={drink} />
            ))}
          </ul>
          <Paginator
            totalCount={data?.totalCount}
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
