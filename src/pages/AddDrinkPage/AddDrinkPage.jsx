import { AddDrinkForm } from '../../components/AddDrinks/AddDrinkForm';
import { FollowUs } from '../../components/AddDrinks/FollowUs';
import { PopularDrinks } from '../../components/AddDrinks/PopularDrinks';
import { PageTitle } from '../../components/reUseComponents/PageTitle';

const AddDrinkPage = () => {
  return (
    <main className="container">
      <PageTitle title="Add drink" />
      <div className="lg:flex lg:gap-[94px]">
        <AddDrinkForm />
        <div>
          <FollowUs />
          <PopularDrinks />
        </div>
      </div>
    </main>
  );
};

export default AddDrinkPage;
