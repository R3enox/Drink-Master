import { Hero } from 'components/Hero/Hero';
import { PreviewDrinks } from 'components/Drinks/PreviewDrinks';
import ScrollBtn from '../../components/reUseComponents/Buttons/ScrollBtn.jsx/ScrollBtn';

const HomePage = () => {
  return (
    <div className="bg-home-set
    md:bg-home-set-tablet lg:bg-home-set-desktop bg-contain bg-no-repeat">
      <Hero />
      <PreviewDrinks />
      <ScrollBtn />
    </div>
  );
};

export default HomePage;


