import { DrinkCardPreview } from '../reUseComponents/DrinkCardPreview';
import { useFilterDrinksQuery } from '../../redux/drinks/drinksAPI';
import { Paginator } from '../reUseComponents/Paginator/Paginator';
import { useDrinkFilters } from 'hooks/useDrinkFilters';
import { usePagination } from 'hooks/usePagination';
import { DrinksLimit } from 'constants/paginationLimits';
import { DrinkImageComponent } from '../reUseComponents/DrinkImageComponent';

export const Drinks = () => {
  const { page, limit, countPagesOfPagination, setPage } =
    usePagination(DrinksLimit);
  const { keyName, category, ingredient } = useDrinkFilters();

  const { data, isLoading } = useFilterDrinksQuery({
    page,
    limit,
    keyName,
    category,
    ingredient,
  });

  const drinksAreNotFinded = !isLoading && data?.totalCount === 0;

  return (
    <div className="pt-[40px]">
      {data?.paginatedResult?.length > 0 && (
        <ul className="flex flex-wrap flex-col md:flex-row gap-[28px] md:gap-x-[20px] md:gap-y-[40px] lg:gap-y-[80px]">
          {data?.paginatedResult?.map((drink) => (
            <DrinkCardPreview key={drink._id} drink={drink} />
          ))}
        </ul>
      )}
      {drinksAreNotFinded ? (
        <DrinkImageComponent
          description={'We did not find any drinks for you'}
        />
      ) : (
        <Paginator
          totalCount={data?.totalCount}
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
