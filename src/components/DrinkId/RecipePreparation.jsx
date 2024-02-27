import * as imgDrinkId from '../../assets/img/drinkId/index.js';
import { useTranslation } from 'react-i18next';
import '../../i18n';

const RecipePreparation = ({ description }) => {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language;

  return (
    <div className="lg:relative mt-[80px] lg:mt-[100px]  lg:flex  lg:pt-[60px] lg:gap-[60px]">
      <h2 className="font-semibold leading-[1.1] text-[40px] hidden lg:block lg:-top-[40px] absolute">
        {t('title2.RecipePreparation')}
      </h2>
      <div className="lg:order-last">
        <h2 className="font-semibold w-[335px] text-[28px] leading-[1.14] mb-[40px] md:text-2xl md:leading-[1.1] lg:hidden">
          {t('title2.RecipePreparation')}
        </h2>
        <p className="mb-[40px] text-[14px] leading-[1.29] md:text-[16px] md:leading-[1.37] lg:w-[594px] ">
          {currentLng === 'uk'
            ? description && description.instructionsUK
            : description && description.instructions}
        </p>
      </div>
      <picture className="flex justify-center items-center">
        <source
          media="(min-width: 1440px)"
          type="image/webp"
          srcSet={`${imgDrinkId.desktopWeb1} 1x, ${imgDrinkId.desktopWeb2} 2x`}
        />
        <source
          media="(min-width: 1440px)"
          type="image/jpg"
          srcSet={`${imgDrinkId.desktopJpg1} 1x, ${imgDrinkId.desktopJpg2} 2x`}
        />
        <source
          media="(min-width: 768px)"
          type="image/webp"
          srcSet={`${imgDrinkId.tabletWeb1} 1x, ${imgDrinkId.tabletWeb2} 2x`}
        />
        <source
          media="(min-width: 768px)"
          type="image/jpg"
          srcSet={`${imgDrinkId.tabletJpg1} 1x, ${imgDrinkId.tabletJpg2} 2x`}
        />
        <source
          media="(min-width: 375px)"
          type="image/webp"
          srcSet={`${imgDrinkId.mobileWeb1} 1x, ${imgDrinkId.mobileWeb2} 2x`}
        />
        <source
          media="(min-width: 375px)"
          type="image/jpg"
          srcSet={`${imgDrinkId.mobileJpg1} 1x, ${imgDrinkId.mobileJpg2} 2x`}
        />
        <img
          className="rounded-xl w-[335px] md:w-[704px] lg:w-[631px] lg:mt-[0px]"
          srcSet={imgDrinkId.mobileJpg1}
          alt="Cocktail"
        />
      </picture>
    </div>
  );
};

export default RecipePreparation;
