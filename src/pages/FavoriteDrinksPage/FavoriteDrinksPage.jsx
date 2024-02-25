import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import DrinksList from '../../components/DrinksList/DrinksList';
import Loader from '../../components/Loader/Loader';
import { Paginator } from '../../components/reUseComponents/Paginator/Paginator';
import { FavoriteDrinksLimit } from 'constants/paginationLimits';
import { usePagination } from 'hooks/usePagination';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteFavorite,
  getFavorites,
} from '../../redux/favorites/favoriteAPI';
import { useEffect, useState } from 'react';
import {
  selectFavorites,
  selectFavoritesError,
  selectFavoritesIsLoading,
  selectFavoritesTotalCount,
} from '../../redux/favorites/favoriteSelector';
import UniversalModal from '../../components/DrinksItem/UniversalModal';
import ModalButtons from '../../components/DrinksItem/ModalButtons';

const FavoriteDrinksPage = () => {
  const { page, per_page, countPagesOfPagination, setPage } =
    usePagination(FavoriteDrinksLimit);

  const dispatch = useDispatch();
  const data = useSelector(selectFavorites);
  const totalCount = useSelector(selectFavoritesTotalCount);
  const isLoading = useSelector(selectFavoritesIsLoading);
  const isError = useSelector(selectFavoritesError);

  useEffect(() => {
    dispatch(getFavorites({ page, per_page }));
  }, [dispatch, page, per_page]);

  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const openFavoriteDrinkModal = () => {
    setIsOpen(true);
  };

  const closeFavoriteDrinkModal = () => {
    setIsOpen(false);
  };

  const handleDeleteClick = async (_id) => {
    try {
      await dispatch(deleteFavorite(_id));
      closeFavoriteDrinkModal();
    } catch (error) {
      toast.error(error.message);
    }
  };

  const drinksAreNotFinded = !isLoading && totalCount === 0;
  return (
    <div className="dark:bg-favorites-set md:dark:bg-favorites-set-tablet lg:dark:bg-favorites-set-desktop bg-contain bg-no-repeat">
      <section className="pb-[80px] mb:pb-[140]">
        <div className="container mx-auto ">
          {isError && toast.error(`Oops, something went wrong!!`)}
          <PageTitle title={'Favorites'} />
          {isLoading && <Loader isStatic />}
          {!isLoading && totalCount > 0 && (
            <>
              <DrinksList
                data={data}
                openMyDrinkModal={openFavoriteDrinkModal}
                onChooseItem={setCurrentId}
              />
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
              description={"You haven't added any favorite cocktails yet"}
            />
          )}
          {isOpen && (
            <UniversalModal
              isOpen={isOpen}
              closeFnc={closeFavoriteDrinkModal}
              content={'Are you sure you want to delete your drink?'}
            >
              <ModalButtons
                closeMyDrinkModal={closeFavoriteDrinkModal}
                handleDeleteClick={() => handleDeleteClick(currentId)}
                drinkId={data}
              />
            </UniversalModal>
          )}
        </div>
      </section>
    </div>
  );
};

export default FavoriteDrinksPage;
