const DrinkPageHero = ({ cocktail }) => {
  if (!cocktail) return null;

  const { drink, category, alcoholic, description, drinkThumb, favorites } =
    cocktail;

  return (
    <div className=" lg:flex justify-between">
      <div className="">
        <h2 className="pb-2 font-semibold text-2xl leading-tight text-gray-100 md:font-semibold md:text-5xl md:leading-tight lg:font-semibold lg:text-5xl lg:leading-[1.0625]">
          {drink}
        </h2>
        <p className="font-normal text-xs leading-4 text-grey-text-color pb-5 md:font-normal md:text-base md:leading-5">
          {category}/{alcoholic}
        </p>
        <p className="font-normal text-base leading-tight text-gray-100 text-start md:font-normal md:leading-[22px] md:w-[593px] lg:leading-[1.375] ">
          {description}
        </p>
        <div className="pt-10 pb-20">
          {favorites ? (
            <button
              className="bg-primary-text-color border rounded-full px-10 py-3 w-56 h-12 font-semibold text-base leading-tight text-blue-900"
              type="button"
            >
              Удалить из избранных
            </button>
          ) : (
            <button
              className="bg-primary-text-color rounded-full px-10 py-3 w-56 h-12 bg-white text-black lg:rounded-full lg:px-11 lg:py-4 lg:w-64 lg:h-14"
              type="button"
            >
              <span className=" text-sm leading-4 text-primary-text-button-color lg:font-semibold lg:text-base lg:leading-[1.125]">
                Add to favorite drinks
              </span>
            </button>
          )}
        </div>
      </div>
      <div>
        <img
          className="w-[335px]  rounded-xl md:w-[704px] md:object-cover lg:w-[400px] "
          src={drinkThumb}
          alt="poster cocktail"
        />
      </div>
    </div>
  );
};

export default DrinkPageHero;
