import { Link } from 'react-router-dom';

const DrinkPageHero = ({ cocktail }) => {
  if (!cocktail) return null;

  const { drink, category, alcoholic, description, drinkThumb, favorites } =
    cocktail;

  return (
    <div className=" lg:flex justify-between">
      <div>
        <h2 className="mb-[8px] font-semibold text-[32px] leading-[1.19] text-gray-100 md:font-semibold md:text-[57px] md:leading-[1.07] lg:text-[64px] lg:leading-[1.06]">
          {drink}
        </h2>
        <p className="text-[12px] leading-[1.17] text-grey-text-color mb-[20px] md:text-[16px] md:leading-[1.25]">
          {category}/{alcoholic}
        </p>
        <p className="text-[14px] leading-[1.29] mb-[40px] text-gray-100 md:text-[16px] md:leading-[1.37] md:max-w-[593px]">
          {description}
        </p>
        <div className="">
          {favorites ? (
            <Link
              className="bg-primary-text-color border rounded-full px-10 py-3 w-56 h-12 font-semibold text-base leading-tight text-blue-900"
              type="button"
            >
              Удалить из избранных
            </Link>
          ) : (
            <Link
              className="mb-[80px] bg-primary-text-color  text-primary-text-button-color font-semibold text-[14px] leading-[1.29] border-transparent border-[1px] rounded-[42px] px-[40px] py-[14px] bg-white text-black md:text-[16px] md:leading-[1.12] lg:px-[44px] lg:py-[18px] lg:w-64 lg:h-14 hover:bg-button-hover-color hover:border hover:border-primary-text-color hover:text-primary-text-color"
              type="button"
            >
              Add to favorite drinks
            </Link>
          )}
        </div>
      </div>
      <div>
        <img
          className="mb-[18px] w-[335px] rounded-xl md:mb-[80px] md:w-[704px] md:object-cover lg:w-[400px] lg:mb-[100px] "
          src={drinkThumb}
          alt="poster cocktail"
        />
      </div>
    </div>
  );
};

export default DrinkPageHero;
