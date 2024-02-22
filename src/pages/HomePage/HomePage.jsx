import { Hero } from 'components/Hero/Hero';
import { PreviewDrinks } from 'components/Drinks/PreviewDrinks';

const HomePage = () => {
  return (
    <div className="bg-home-set
    md:bg-home-set-tablet lg:bg-home-set-desktop bg-contain bg-no-repeat">
      <Hero />
      <PreviewDrinks />
    </div>
  );
};

export default HomePage;


