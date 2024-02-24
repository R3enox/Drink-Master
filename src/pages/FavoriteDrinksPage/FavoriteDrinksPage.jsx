import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import DrinksList from '../../components/DrinksList/DrinksList';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteFavorite,
  getFavorites,
} from '../../redux/favorites/favoriteAPI';
import { useEffect } from 'react';
import {
  selectFavorites,
  selectFavoritesError,
  selectFavoritesIsLoading,
} from '../../redux/favorites/favoriteSelector';

const FavoriteDrinksPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectFavorites);
  const isLoading = useSelector(selectFavoritesIsLoading);
  const isError = useSelector(selectFavoritesError);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  return (
    <section className="pb-[80px] mb:pb-[140]">
      <div className="container mx-auto ">
        {isLoading && <Loader />}
        {isError && toast.error(`Oops, something went wrong!!`)}
        <PageTitle title={'Favorites'} />
        {data && data.length > 0 ? (
          <DrinksList data={data} onDelete={() => dispatch(deleteFavorite())} />
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
