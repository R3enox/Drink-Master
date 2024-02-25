import { AddDrinkForm } from '../../components/AddDrinks/AddDrinkForm';
import { FollowUs } from '../../components/AddDrinks/FollowUs';
import { PopularDrinks } from '../../components/AddDrinks/PopularDrinks';
import { PageTitle } from '../../components/reUseComponents/PageTitle';

import { useTranslation } from 'react-i18next';
import '../../i18n';

const AddDrinkPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <main className="container">
      <PageTitle title={t('title.AddDrink')} />
      <AddDrinkForm />
      <FollowUs />
      <PopularDrinks />
    </main>
  );
};

export default AddDrinkPage;
