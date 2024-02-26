import { Hero } from 'components/Hero/Hero';
import { PreviewDrinks } from 'components/Drinks/PreviewDrinks';


const HomePage = () => {
  return (
    <div className="bg-contain bg-no-repeat dark:bg-home-set md:dark:bg-home-set-tablet lg:dark:bg-home-set-desktop">
      <Hero />
      <PreviewDrinks />

    </div>
  );
};

export default HomePage;
