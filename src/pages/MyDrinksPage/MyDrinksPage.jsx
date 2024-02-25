import DrinksList from '../../components/DrinksList/DrinksList';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import Loader from '../../components/Loader/Loader';
import { useEffect, useState } from 'react';
import UniversalModal from '../../components/DrinksItem/UniversalModal';
import { Paginator } from '../../components/reUseComponents/Paginator/Paginator';
import ModalButtons from '../../components/DrinksItem/ModalButtons';
import { deleteMyDrink, getMyDrinks } from '../../redux/myDrinks/myDrinksAPI';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMyDrinks,
  selectMyDrinksError,
  selectMyDrinksLoading,
  selectMyDrinksTotalCount,
} from '../../redux/myDrinks/myDrinksSelector';
import { usePagination } from '../../hooks/usePagination';
import { MyDrinksLimit } from '../../constants/paginationLimits';

const MyDrinksPage = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectMyDrinks);
  const isLoading = useSelector(selectMyDrinksLoading);
  const isError = useSelector(selectMyDrinksError);

  const { page, per_page, countPagesOfPagination, setPage } =
    usePagination(MyDrinksLimit);
  const totalCount = useSelector(selectMyDrinksTotalCount);

  useEffect(() => {
    dispatch(getMyDrinks({ page, per_page }));
  }, [dispatch, page, per_page]);

  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState(null);

  const openMyDrinkModal = () => {
    setIsOpen(true);
  };

  const closeMyDrinkModal = () => {
    setIsOpen(false);
  };

  const handleDeleteClick = async (_id) => {
    try {
      await dispatch(deleteMyDrink(_id));
      closeMyDrinkModal();
    } catch (error) {
      console.error('Помилка видалення: ', error);
    }
  };

  const drinksAreNotFinded = !isLoading && totalCount === 0;

  return (
    <div
      className="bg-common-set
    md:bg-common-set-tablet lg:bg-common-set-desktop bg-contain bg-no-repeat"
    >
      <section className="pb-[80px] md:pb-[140px] ">
        <div className="container mx-auto">
          <PageTitle title="My drinks" />
          {isLoading && <Loader isStatic />}
          {/* {isError && <Redirect to="error.message" />} */}
          {totalCount > 0 && (
            <>
              <DrinksList
                data={data}
                openMyDrinkModal={openMyDrinkModal}
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
            <DrinkImageComponent description="You don't have your own drinks yet" />
          )}
          {isOpen && (
            <UniversalModal
              isOpen={isOpen}
              closeFnc={closeMyDrinkModal}
              content={'Are you sure you want to delete your drink?'}
            >
              <ModalButtons
                closeMyDrinkModal={closeMyDrinkModal}
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

export default MyDrinksPage;
