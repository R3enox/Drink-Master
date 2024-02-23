import {
  useFechFavoritesQuery,
  useRemoveFavoritesMutation,
} from '../../redux/favorites/favoriteSlice';
import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import DrinksList from '../../components/DrinksList/DrinksList';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';

const FavoriteDrinksPage = () => {
  const { data, error, isFetching } = useFechFavoritesQuery();

  const [deleteFavorite] = useRemoveFavoritesMutation();
  return (
    <section className="pb-[80px] mb:pb-[140]">
      <div className="container mx-auto ">
        {isFetching && <Loader />}
        {error && toast.error(`Oops, something went wrong!!`)}
        <PageTitle title={'Favorites'} />
        {data && data.length > 0 ? (
          <DrinksList data={data} onDelete={deleteFavorite} />
        ) : (
          <DrinkImageComponent
            description={"You haven't added any favorite cocktails yet"}
          />
        )}
      </div>
    </section>
  );
};
export default FavoriteDrinksPage;
