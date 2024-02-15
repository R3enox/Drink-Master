import { DrinksList } from '../../components/Drinks/DrinksList';
import { FilterSearch } from '../../components/FilterSearch/FilterSearch';
import { PageTitle } from '../../components/PageTitle';

export default function DrinksPage() {
  return (
    <div>
      <PageTitle title="Drinks" />
      <br />
      <FilterSearch />
      <br />

      <DrinksList />
    </div>
  );
}
