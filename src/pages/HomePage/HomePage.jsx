import { Hero } from 'components/Hero/Hero';
import { PreviewDrinks } from 'components/Drinks/PreviewDrinks';

const HomePage = () => {
  return (
    <div className="bg-mobile-bg-homepage md:bg-tablet-bg-homepage lg:bg-desktop-bg-homepage bg-contain bg-no-repeat">
      <div className="container m-auto pb-[80px] md:pb-[140px]">
        <Hero />
        <PreviewDrinks />
      </div>
    </div>
  );
};

export default HomePage;
