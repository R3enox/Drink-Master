import {
  useDeleteMyDrinkMutation,
  useFetchMyDrinksQuery,
} from '../../redux/myDrinks/myDrinksSlice';
import DrinksList from '../../components/DrinksList/DrinksList';
import { PageTitle } from '../../components/reUseComponents/PageTitle';
import { DrinkImageComponent } from '../../components/reUseComponents/DrinkImageComponent';
import Loader from '../../components/Loader/Loader';

const MyDrinksPage = () => {
  const { data, error, isLoading, isFetching, isError } =
    useFetchMyDrinksQuery();

  const [deleteMyDrink] = useDeleteMyDrinkMutation();

  return (
    <section className="pb-[80px]">
      <div className="container mx-auto">
        <PageTitle title="My drinks" className="mb-[40] mb:mb-[60]" />
        {/* {isFetching && <Loader isStatic />} */}
        {data && data.length > 0 ? (
          <DrinksList data={data} onDelete={deleteMyDrink} />
        ) : (
          <DrinkImageComponent description="You don't have your own drinks yet" />
        )}
      </div>
    </section>
  );
};

export default MyDrinksPage;
