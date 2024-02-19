import { Hero } from '../../components/Hero/Hero';
import { PreviewDrinks } from '../../components/Drinks/PreviewDrinks';

function HomePage() {
  return (
    <div className="container">
      <Hero />
      <PreviewDrinks />
    </div>
  );
}

export default HomePage;
