import * as imgHero from '../../assets/img/hero/index.js';

import TypingText from '../reUseComponents/TypingTextAnimation/TypingText.jsx';

import { useTranslation } from 'react-i18next';
import '../../i18n';
import { ButtonThemeChange } from '../reUseComponents/Buttons/ButtonThemeChange.jsx';

export const Hero = () => {
  const { t, i18n } = useTranslation();

  return (
    <section className="container flex-wrap m-auto pt-[80px] pb-[56px] md:pt-[120px] md:pb-[61px] lg:pt-[128px] lg:flex lg:pb-[80px] lg:gap-x-[130px]">
      <div className="mb-[47px] md:mb-[54px]">
        <div
          className="font-semibold text-[32px] leading-[1.19] h-[114px]
        md:text-[56px] md:leading-[1.07] md:h-[120px] md:w-[641px] lg:text-[64px] lg:mt-[57px] lg:w-[715px] lg:h-[136px] "
        >
          <TypingText
            className="font-semibold text-[32px] leading-[1.19]  
        md:text-[56px] md:w-[641px] md:h-[120px] md:leading-[1.07] lg:text-[64px] lg:mt-[57px] lg:w-[715px]"
          />
        </div>
        <p className="text-[14px] leading-[1.43] mt-[16px] mb-[32px] md:text-[18px] md:leading-[1.33] md:mt-[28px] md:w-[619px] lg:mb-[40px] lg:w-[500px]">
          {t('Hero.text')}
        </p>
        <ButtonThemeChange title={t('title.AddDrink')} to={'/add'} />
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
