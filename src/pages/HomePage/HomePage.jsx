import React from 'react';
import { Link } from 'react-router-dom';
import { PreviewDrinks } from '../../components/Drinks/PreviewDrinks';

import css from './AddDrink.module.css';
import imageSrc from './img/asr_blue_iced_tea_4203516a_f9a0_4011_b97a_c7044eabc27f 1.png';
import imageSrc1 from './img/Ellipse 222.png';
import imageSrc2 from './img/Ellipse.png';
import imageSrc3 from './img/Ellipse 224.png';
function HomePage() {
  return (
    <div>
      <div className={css.container}>
        <h1 className={css.title}>
          Craft Your Perfect Drink with Drink Master
        </h1>
        <p className={css.text}>
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </p>
        <Link className={css.link} to="/add-drink">
          Add Drink
        </Link>
      </div>
      <img src={imageSrc} alt="" className={css.image} />
      <img src={imageSrc1} alt="" className={css.image3} />
      <img src={imageSrc2} alt="" className={css.image4} />
      <img src={imageSrc3} alt="" className={css.image5} />
      <h1>HeroSection</h1>
      <PreviewDrinks />
    </div>
  );
}

export default HomePage;
