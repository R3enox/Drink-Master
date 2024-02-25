import {
  useDeleteMyDrinkMutation,
  useFetchMyDrinksQuery,
} from '../../redux/myDrinks/myDrinksSlice';
import DrinksList from '../../components/DrinksList/DrinksList';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import Loader from '../../components/Loader/Loader';
import { useState } from 'react';
import UniversalModal from '../../components/DrinksItem/UniversalModal';
import ModalButtons from '../../components/DrinksItem/ModalButtons';

import { useTranslation } from 'react-i18next';
import '../../i18n';

const MyDrinksPage = () => {
  const { t, i18n } = useTranslation();

  const { data, isFetching, isError } = useFetchMyDrinksQuery();

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

  return (
    <div
      className="bg-common-set
    md:bg-common-set-tablet lg:bg-common-set-desktop bg-contain bg-no-repeat"
    >
      <section className="pb-[80px] md:pb-[140px] ">
        <div className="container mx-auto">
          {isError && <h1>{isError}</h1>}
          <PageTitle title={t('title.myDrinks')} />
          {isFetching && <Loader isStatic />}
          {/* {error && <Redirect to="error.message" />} */}
          {data && data.length > 0 ? (
            <DrinksList
              data={data}
              openMyDrinkModal={openMyDrinkModal}
              onChooseItem={setCurrentId}
            />
          ) : (
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
    </div>
  );
};

export default MyDrinksPage;
