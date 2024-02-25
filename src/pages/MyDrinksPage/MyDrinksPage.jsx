import { useState } from 'react';

import DrinksList from '../../components/DrinksList/DrinksList';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import Loader from '../../components/Loader/Loader';
import UniversalModal from '../../components/DrinksItem/UniversalModal';
import { Paginator } from '../../components/reUseComponents/Paginator/Paginator';
import ModalButtons from '../../components/DrinksItem/ModalButtons';
import {
  useDeleteMyDrinkMutation,
  useFetchMyDrinksQuery,
} from '../../redux/myDrinks/myDrinksSlice';
import { MyDrinksLimit } from 'constants/paginationLimits';
import { usePagination } from 'hooks/usePagination';

const MyDrinksPage = () => {
  const { page, per_page, countPagesOfPagination, setPage } =
    usePagination(MyDrinksLimit);
  const { data, error, isFetching, isError } = useFetchMyDrinksQuery({
    page,
    per_page,
  });
  console.log(data);

  const [deleteMyDrink] = useDeleteMyDrinkMutation();
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
      await deleteMyDrink(_id);
      closeMyDrinkModal();
    } catch (error) {
      console.error('Помилка видалення: ', error);
    }
  };

  const drinksAreNotFinded = !isFetching && data?.totalCount === 0;

  return (
    <div
      className="bg-common-set
    md:bg-common-set-tablet lg:bg-common-set-desktop bg-contain bg-no-repeat"
    >
      <section className="pb-[80px] md:pb-[140px] ">
        <div className="container mx-auto">
          <PageTitle title="My drinks" />
          {isFetching && <Loader isStatic />}
          {/* {error && <Redirect to="error.message" />} */}
          {data?.totalCount > 0 && (
            <>
              <DrinksList
                data={data.paginatedResult}
                openMyDrinkModal={openMyDrinkModal}
                onChooseItem={setCurrentId}
              />
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
