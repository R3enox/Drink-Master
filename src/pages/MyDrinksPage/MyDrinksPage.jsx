import {
  useDeleteMyDrinkMutation,
  useFetchMyDrinksQuery,
} from '../../redux/myDrinks/myDrinksSlice';
import DrinksList from '../../components/DrinksList/DrinksList';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import { useState } from 'react';
import UniversalModal from '../../components/DrinksItem/UniversalModal';
import ModalButtons from '../../components/DrinksItem/ModalButtons';

const MyDrinksPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    useFetchMyDrinksQuery();
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
      console.log(_id);
      await deleteMyDrink(_id);
      closeMyDrinkModal();
    } catch (error) {
      console.error('Помилка видалення: ', error);
    }
  };

  return (
    <div
      className="bg-common-set
    md:bg-common-set-tablet lg:bg-common-set-desktop bg-contain bg-no-repeat"
    >
      <section className="pb-[80px] md:pb-[140px] ">
        <div className="container mx-auto">
          <PageTitle title="My drinks" />
          {/* {isFetching && <loader/>} */}
          {/* {error && <Redirect to="error.message" />} */}
          {data && data.length > 0 ? (
            // <DrinksList data={data} onDelete={deleteMyDrink} />
            <DrinksList
              data={data}
              openMyDrinkModal={openMyDrinkModal}
              onChooseItem={setCurrentId}
            />
          ) : (
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
