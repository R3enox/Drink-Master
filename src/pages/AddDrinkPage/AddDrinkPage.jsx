import { AddDrinkForm } from '../../components/AddDrinks/AddDrinkForm';
import { FollowUs } from '../../components/AddDrinks/FollowUs';
import { PopularDrinks } from '../../components/AddDrinks/PopularDrinks';
import { PageTitle } from '../../components/reUseComponents/PageTitle';

const AddDrinkPage = () => {
  return (
    <>
      <PageTitle title="Add drink" />
      <AddDrinkForm />
      <FollowUs />
      <PopularDrinks />
    </>
  );
};

export default AddDrinkPage;
