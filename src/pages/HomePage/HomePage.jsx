import { Hero } from 'components/Hero/Hero';
import { PreviewDrinks } from 'components/Drinks/PreviewDrinks';

const HomePage = () => {
  return (
    <>
      <div className="bg-no-repeat lg:dark:bg-home-set-desktop bg-top-right ">
        <Hero />
        <PreviewDrinks />
      </div>
    </>
  );
};

export default HomePage;
