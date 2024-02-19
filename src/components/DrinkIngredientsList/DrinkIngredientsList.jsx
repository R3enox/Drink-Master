const DrinkIngredientsList = ({ ingredients }) => {
  return (
    <>
      <h2 className="mb-[42px] mt-[18px] font-medium text-base leading-5 text-grey-text-color md:mt-[80px] md:font-medium md:text-base lg:mt-[100px]">
        Ingredients
      </h2>
      <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 md:lg:grid-cols-5  md:gap-[22px]">
        {ingredients &&
          ingredients.map(
            ({
              _id,
              title,
              ingredientThumb,
              'thumb-medium': thumbMedium,
              'thumb-small': thumbSmall,
            }) => {
              return (
                <div
                  key={_id['$oid']}
                  className="md:w-[220px] md:h-[220px] lg:w-[220px]lg:h-[220px] md:mb-[22px]"
                >
                  <div className="p-[25px] relative w-[157px] h-[157px] rounded-lg flex-col flex items-center bg-ingredients-card-bg md:w-[220px] md:h-[220px] lg:p-[32px]">
                    <picture>
                      <source
                        media="(min-width: 1440px)"
                        srcSet={ingredientThumb}
                      />
                      <source media="(min-width: 768px)" srcSet={thumbMedium} />
                      <img
                        src={thumbSmall}
                        alt=""
                        className="w-[107px] h-[107px] md:w-[157px] md:h-[157px] lg:w-[157px] lg:h-[157px]"
                      />
                    </picture>
                  </div>
                  <div className="flex justify-between mt-[8px] md:mt-[14px] ">
                    <p className=" font-medium leading-5 text-xs md:text-lg md:leading-6 lg:font-medium lg:text-base lg:leading-[1.33333] ">
                      {title}
                    </p>
                    <p className="text-grey-text-color font-medium text-sm leading-5 md:font-medium md:text-base md:leading-[1.25] lg:text-base">
                      3cl
                    </p>
                  </div>
                </div>
              );
            }
          )}
      </div>
    </>
  );
};

export default DrinkIngredientsList;
