import {
  useDeleteMyDrinkMutation,
  useFetchMyDrinksQuery,
} from '../../redux/myDrinks/myDrinksSlice';
import DrinksList from '../../components/DrinksList/DrinksList';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import { useState } from 'react';
import UniversalModalWrap from '../../components/DrinksItem/UniversalModal';
import UniversalModal from '../../components/DrinksItem/UniversalModal';
import ModalButtons from '../../components/DrinksItem/ModalButtons';


const MyDrinksPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    useFetchMyDrinksQuery();

  const [isOpen, setIsOpen] = useState(false);

  const openMyDrinkModal = () => {
    setIsOpen(true);
    console.log('Модальне вікно відкрито', isOpen);
  };

  const closeMyDrinkModal = () => {
    setIsOpen(false);
    console.log('Модальне вікно закрито', isOpen);
  };

  const deleteMyDrinkMutation = useDeleteMyDrinkMutation();

  // const handleDeleteClick = async () => {
  //   try {
  //     console.log('Початок видалення');
  //     console.log(deleteMyDrinkMutation);

  //     await deleteMyDrinkMutation();
  //     console.log('Видалення успішне');
  //     // Додайте інші дії, якщо потрібно
  //   } catch (error) {
  //     console.error('Помилка видалення: ', error);
  //   }
  // };

  return (
    <section className="pb-[80px] md:pb-[140px] ">
      <div className="container mx-auto">
        <PageTitle title="My drinks" />
        {/* {isFetching && <loader/>} */}
        {/* {error && <Redirect to="error.message" />} */}
        {data && data.length > 0 ? (
          // <DrinksList data={data} onDelete={deleteMyDrink} />
          <DrinksList data={data} openMyDrinkModal={openMyDrinkModal} />
        ) : (
          <DrinkImageComponent description="You don't have your own drinks yet" />

        )}
        {isOpen && (
          <UniversalModal
            isOpen={isOpen}
            closeFnc={closeMyDrinkModal}
            content={'Are you sure you want to delete your drink?'}
          >
            <ModalButtons closeMyDrinkModal={closeMyDrinkModal} />
          </UniversalModal>
        )}
      </div>
    </section>
  );
};

export default MyDrinksPage;
