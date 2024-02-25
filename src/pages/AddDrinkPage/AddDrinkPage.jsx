import { AddDrinkForm } from '../../components/AddDrinks/AddDrinkForm';
import { FollowUs } from '../../components/AddDrinks/FollowUs';
import { PopularDrinks } from '../../components/AddDrinks/PopularDrinks';
import { PageTitle } from '../../components/reUseComponents/PageTitle';

const AddDrinkPage = () => {
  return (
    <div
      className="dark:bg-common-set
    md:dark:bg-common-set-tablet lg:dark:bg-common-set-desktop bg-contain bg-no-repeat"
    >
      <div className="container mx-auto">
        <PageTitle title="Add drink" />
        <div className="lg:flex lg:gap-[94px]">
          <AddDrinkForm />
          <div>
            <FollowUs />
            <PopularDrinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDrinkPage;
