import {
  useDeleteMyDrinkMutation,
  useFetchMyDrinksQuery,
} from '../../redux/myDrinks/myDrinksSlice';
import DrinksList from '../../components/DrinksList/DrinksList';
import { PageTitle } from '../../components/PageTitle';

const MyDrinksPage = () => {
  const { data, error, isLoading, isFetching, isError } = useFetchMyDrinksQuery(
    '65cf72409bdf635521161ec2'
  );

  const [deleteMyDrink] = useDeleteMyDrinkMutation();

  return (
    <div>
      <PageTitle title="My drinks" />
      {/* {isFetching && <loader/>} */}
      {data && data.length > 0 ? (
        <DrinksList data={data} onDelete={deleteMyDrink} />
      ) : (
        <p> Заглушка</p>
        // <DrinkImageComponent description="You don't have your own drinks yet" />
      )}
    </div>
  );
};

export default MyDrinksPage;
