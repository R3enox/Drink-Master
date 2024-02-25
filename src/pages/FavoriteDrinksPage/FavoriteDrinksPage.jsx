import { toast } from 'react-toastify';
import {
  useFechFavoritesQuery,
  useRemoveFavoritesMutation,
} from '../../redux/favorites/favoriteSlice';
import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import DrinksList from '../../components/DrinksList/DrinksList';
import Loader from '../../components/Loader/Loader';
import { Paginator } from '../../components/reUseComponents/Paginator/Paginator';
import { FavoriteDrinksLimit } from 'constants/paginationLimits';
import { usePagination } from 'hooks/usePagination';

const FavoriteDrinksPage = () => {
  const { page, per_page, countPagesOfPagination, setPage } =
    usePagination(FavoriteDrinksLimit);
  const { data, error, isFetching } = useFechFavoritesQuery({ page, per_page });
  const [deleteFavorite] = useRemoveFavoritesMutation();

  const drinksAreNotFinded = !isFetching && data.totalCount === 0;

  return (
    <section className="pb-[80px] mb:pb-[140]">
      <div className="container mx-auto ">
        {isFetching && <Loader />}
        {error && toast.error(`Oops, something went wrong!!`)}
        <PageTitle title={'Favorites'} />
        {data?.totalCount > 0 && (
          <>
            <DrinksList data={data.paginatedResult} onDelete={deleteFavorite} />
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
            description={"You haven't added any favorite cocktails yet"}
          />
        )}
      </div>
    </section>
  );
};

export default FavoriteDrinksPage;
