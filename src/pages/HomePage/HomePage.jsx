import { Hero } from 'components/Hero/Hero';
import { PreviewDrinks } from 'components/Drinks/PreviewDrinks';

const HomePage = () => {
  return (
    <div className="bg-mobile-bg-homepage md:bg-tablet-bg-homepage lg:bg-desktop-bg-homepage bg-contain bg-no-repeat">
      <Hero />
      <PreviewDrinks />
    </div>
  );
};

export default HomePage;
