import { useEffect } from 'react';

import { PageTitle } from 'components/reUseComponents/PageTitle';
import { DrinksSearch } from 'components/Drinks/DrinksSearch';
import { Drinks } from 'components/Drinks/Drinks';
import { scrollToTop } from 'helpers/scrollToTop';

import { useTranslation } from 'react-i18next';
import '../../i18n';
import ScrollBtn from '../../components/reUseComponents/Buttons/ScrollBtn/ScrollBtn';

const DrinksPage = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <div
      className=" dark:bg-common-set
    md:dark:bg-common-set-tablet lg:dark:bg-common-set-desktop bg-contain bg-no-repeat"
    >
      <div className="container mx-auto pb-[80px]">
        <PageTitle title={t('title.Drinks')} />
        <DrinksSearch />
        <Drinks />
        <ScrollBtn/>
      </div>
    </div>
  );
};

export default DrinksPage;
