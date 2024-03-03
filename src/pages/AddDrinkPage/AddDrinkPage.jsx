import { AddDrinkForm } from '../../components/AddDrinks/AddDrinkForm';
import { FollowUs } from '../../components/AddDrinks/FollowUs';
import { PopularDrinks } from '../../components/AddDrinks/PopularDrinks';
import { PageTitle } from '../../components/reUseComponents/PageTitle';

import { useTranslation } from 'react-i18next';
import '../../i18n';
import ScrollBtn from '../../components/reUseComponents/Buttons/ScrollBtn/ScrollBtn';

const AddDrinkPage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div
      className="dark:bg-common-set
    md:dark:bg-common-set-tablet lg:dark:bg-common-set-desktop bg-contain bg-no-repeat"
    >
      <div className="container mx-auto">
        <PageTitle title={t('title.AddDrink')} />
        <div className="lg:flex lg:gap-[94px]">
          <AddDrinkForm />
          <div>
            <FollowUs />
            <PopularDrinks />
          </div>
        </div>
      </div>
      <ScrollBtn/>
    </div>
  );
};

export default AddDrinkPage;
