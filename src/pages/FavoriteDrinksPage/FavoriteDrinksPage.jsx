import {
  useFechFavoritesQuery,
  useRemoveFavoritesMutation,
} from '../../redux/favorites/favoriteSlice';
import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import DrinksList from '../../components/DrinksList/DrinksList';
import Loader from '../../components/Loader/Loader';
import { toast } from 'react-toastify';

import { useTranslation } from 'react-i18next';
import '../../i18n';

const FavoriteDrinksPage = () => {
  const { t, i18n } = useTranslation();
  const { data, error, isFetching } = useFechFavoritesQuery();

  const [deleteFavorite] = useRemoveFavoritesMutation();
  return (
    <section className="pb-[80px] mb:pb-[140]">
      <div className="container mx-auto ">
        {isFetching && <Loader />}
        {error && toast.error(t('toastError.Favorite'))}
        <PageTitle title={t('title.Favorite')} />
        {data && data.length > 0 ? (
          <DrinksList data={data} onDelete={deleteFavorite} />
        ) : (
          <DrinkImageComponent
            description={t('DrinkImageComponent.Favorite')}
          />
        )}
      </div>
    </section>
  );
};
export default FavoriteDrinksPage;
