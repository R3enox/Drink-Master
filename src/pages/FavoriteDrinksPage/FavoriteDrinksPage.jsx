import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import { PageTitle } from '../../components/reUseComponents/PageTitle';

const FavoriteDrinksPage = () => {
  return (
    <section className="container">
      <PageTitle title={'Favorites'} />
      <DrinkImageComponent
        description={'You havent added any favorite cocktails yet'}
      />
    </section>
  );
};
export default FavoriteDrinksPage;
