import { useEffect } from 'react';

import { PageTitle } from 'components/reUseComponents/PageTitle';
import { DrinksSearch } from 'components/Drinks/DrinksSearch';
import { Drinks } from 'components/Drinks/Drinks';

import { useTranslation } from 'react-i18next';
import '../../i18n';

const DrinksPage = () => {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="bg-common-set
    md:bg-common-set-tablet lg:bg-common-set-desktop bg-contain bg-no-repeat"
    >
      <div className="container mx-auto pb-[80px]">
        <PageTitle title={t('title.Drinks')} />
        <DrinksSearch />
        <Drinks />
      </div>
    </div>
  );
};

export default DrinksPage;
