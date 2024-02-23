import * as imgHero from '../../assets/img/hero/index.js';
import { LinkDarkTheme } from '../reUseComponents/Buttons/Buttons.jsx';
import TypingText from '../reUseComponents/TypingTextAnimation/TypingText.jsx';

export const Hero = () => {
  return (
    <section className="container m-auto flex pt-[80px] pb-[56px] md:pt-[120px] md:pb-[61px] lg:pt-[128px] lg:pb-[80px] lg:flex gap-x-[130px]">
      <div className="mb-[47px] md:mb-[54px]">
        <div
          className="font-semibold text-[32px] leading-[1.19]
        md:text-[56px] md:leading-[1.07] lg:text-[64px] lg:mt-[57px] lg:w-[715px] "
        >
          <TypingText
            className="font-semibold text-[32px] leading-[1.19]  
        md:text-[56px] md:leading-[1.07] lg:text-[64px] lg:mt-[57px] lg:w-[715px]"
          />
        </div>

        {/* <h1
          className="font-semibold text-[32px] leading-[1.19]  
        md:text-[56px] md:leading-[1.07] lg:text-[64px] lg:mt-[57px] lg:w-[715px]"
        >
          Craft Your Perfect Drink with Drink Master
        </h1> */}

        <p className="text-[14px] leading-[1.43] mt-[16px] mb-[32px] md:text-[18px] md:leading-[1.33] md:mt-[28px] lg:pt-[28px]  lg:mb-[40px] lg:w-[500px]">
          Unlock your inner mixologist with Drink Master, your one-stop
          destination for exploring, crafting, and mastering the world's finest
          beverages.
        </p>

        <LinkDarkTheme to="/add">Add drink</LinkDarkTheme>
      </div>
      <picture className="flex justify-center items-center">
        <source
          media="(min-width: 768px)"
          type="image/webp"
          srcSet={`${imgHero.tabletWeb1} 1x, ${imgHero.tabletWeb2} 2x`}
        />
        <source
          media="(min-width: 768px)"
          type="image/png"
          srcSet={`${imgHero.tabletPng1} 1x, ${imgHero.tabletPng2} 2x`}
        />

        <source
          media="(min-width: 375px)"
          type="image/webp"
          srcSet={`${imgHero.mobileWeb1} 1x, ${imgHero.mobileWeb2} 2x`}
        />

        <source
          media="(min-width: 375px)"
          type="image/webp"
          srcSet={`${imgHero.mobilePng1} 1x, ${imgHero.mobilePng2} 2x`}
        />

        <img srcSet={imgHero.mobilePng1} alt="Cocktail" />
      </picture>
    </section>
  );
};
