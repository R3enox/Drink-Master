import { Hero } from 'components/Hero/Hero';
import { PreviewDrinks } from 'components/Drinks/PreviewDrinks';
import ScrollBtn from '../../components/reUseComponents/Buttons/ScrollBtn/ScrollBtn';

const HomePage = () => {
  return (
    <>
      <div className="bg-no-repeat lg:dark:bg-home-set-desktop bg-top-right ">
        <Hero />
        <PreviewDrinks />
        <ScrollBtn/>
      </div>
    </>
  );
};

export default HomePage;
