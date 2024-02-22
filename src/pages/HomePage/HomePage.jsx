import { Hero } from 'components/Hero/Hero';
import { PreviewDrinks } from 'components/Drinks/PreviewDrinks';

const HomePage = () => {
  return (
    <div className="container m-auto pb-[80px] md:pb-[140px]">
      <Hero />
      <PreviewDrinks />
    </div>
  );
};

export default HomePage;
