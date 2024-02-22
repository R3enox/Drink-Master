import * as imgResipe from '../../assets/img/drinkId/index.js';

const RecipePreparation = ({ description }) => {
  return (
    <div className="mb-[80px] mt-[80px]  md:mb-[140px] lg:flex lg:gap-[20px] ">
      <div className="lg:order-last">
        <h2 className="font-semibold w-[335px] text-4xl leading-7 mb-[40px] md:text-2xl md:leading-[1.1]">
          Recipe Preparation
        </h2>
        <p className=" font-normal text-base leading-5 md:text-sm md:leading-[1.28571] lg:w-[594px] ">
          {description && description.instructions}
        </p>
      </div>

      <picture>
        <source
          media="(min-width: 1440px)"
          srcSet={imgResipe.descImg}
        />
        <source
          media="(min-width: 768px)"
          className=" "
          srcSet={imgResipe.tabletImg}
        />
        <img
          className="rounded-xl w-[335px] mt-[40px] md:w-[704px] lg:w-[631px] lg:mt-[0px] "
          src={imgResipe.mobileImg}
          alt="cocktails"
        />
      </picture>
    </div>
  );
};

export default RecipePreparation;
