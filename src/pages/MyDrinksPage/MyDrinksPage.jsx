import DrinksList from '../../components/DrinksList/DrinksList';
import { PageTitle } from '../../components/PageTitle';

const MyDrinksPage = ({ cocktails, onSeeMore, onDelete }) => {
  return (
    <div>
      <PageTitle title="My drinks" />
      <DrinksList
        cocktails={cocktails}
        onSeeMore={onSeeMore}
        onDelete={onDelete}
      />
    </div>
  );
};

export default MyDrinksPage;
