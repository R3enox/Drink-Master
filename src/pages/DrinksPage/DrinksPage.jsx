import { useEffect } from 'react';

import { PageTitle } from 'components/reUseComponents/PageTitle';
import { DrinksSearch } from 'components/Drinks/DrinksSearch';
import { Drinks } from 'components/Drinks/Drinks';

const DrinksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-mobile-bg-commonpage md:bg-tablet-bg-commonpage lg:bg-desktop-bg-commonpage bg-cover bg-no-repeat">
      <div className="container m-auto">
        <PageTitle title="Drinks" />
        <DrinksSearch />
        <Drinks />
      </div>
    </div>
  );
};

export default DrinksPage;
