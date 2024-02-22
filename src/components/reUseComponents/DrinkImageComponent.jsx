import * as drinkImage from '../../assets/img/drinkImage/index.js';

export const DrinkImageComponent = ({ description }) => {
  return (
    <div>
      <picture className="flex justify-center items-center mb-[32px]">
        <source
          media="(min-width: 768px)"
          type="image/webp"
          srcSet={`${drinkImage.drinkTabletWeb} 1x, ${drinkImage.drinkTabletWeb2x} 2x`}
        />
        <source
          media="(min-width: 768px)"
          type="image/png"
          srcSet={`${drinkImage.drinkTabletPng} 1x, ${drinkImage.drinkTabletPng2x} 2x`}
        />
        <source
          media="(min-width: 375px)"
          type="image/webp"
          srcSet={`${drinkImage.drinkMobileWeb} 1x, ${drinkImage.drinkMobileWeb2x} 2x`}
        />

        <source
          media="(min-width: 375px)"
          type="image/png"
          srcSet={`${drinkImage.drinkMobilePng} 1x, ${drinkImage.drinkMobilePng2x} 2x`}
        />

        <img srcSet={drinkImage.drinkMobilePng} alt="Cocktail" />
      </picture>

      <p className="text-primary-text-color font-medium block mx-auto text-center w-[205px] text-[14px] leading-[1.28] md:w-[236px] md:text-[16px] md:leading-[1.4]">
        {description}
      </p>
    </div>
  );
};
