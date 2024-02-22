import { useEffect } from 'react';

import { PageTitle } from 'components/reUseComponents/PageTitle';
import { DrinksSearch } from 'components/Drinks/DrinksSearch';
import { Drinks } from 'components/Drinks/Drinks';

const DrinksPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container m-auto">
      <PageTitle title="Drinks" />
      <DrinksSearch />
      <Drinks />
    </div>
  );
};

export default DrinksPage;
