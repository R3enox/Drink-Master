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

import { useTranslation } from 'react-i18next';
import '../../i18n';

const MyDrinksPage = () => {
  const { t, i18n } = useTranslation();

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
    <section
      className="pb-[80px] md:pb-[140px] dark:bg-common-set
    md:dark:bg-common-set-tablet lg:dark:bg-common-set-desktop bg-cover bg-no-repeat"
    >
      <div className="container mx-auto">
        {isError && <h1>{isError}</h1>}
        <PageTitle title={t('title.myDrinks')} />
        {isLoading && <Loader isStatic />}
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
          <DrinkImageComponent
            description={t('DrinkImageComponent.myDrinks')}
          />
        )}
        {isOpen && (
          <UniversalModal
            isOpen={isOpen}
            closeFnc={closeMyDrinkModal}
            content={t('UniversalModal.myDrinks')}
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
  );
};

export default MyDrinksPage;
