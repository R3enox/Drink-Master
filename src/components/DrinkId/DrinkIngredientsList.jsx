import { useTranslation } from 'react-i18next';
import '../../i18n';

const DrinkIngredientsList = ({ ingredients }) => {
  const { t } = useTranslation();
  return (
    <>
      <h2 className="mb-[42px] font-medium text-[16px] leading-[1.25] text-hover-border-color-search dark:text-grey-text-color md:mb-[24px] md:font-medium md:text-[16px] md:leading-[1.25]">
        {t('title2.DrinkIngredientsList')}
      </h2>
      <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 md:lg:grid-cols-5  md:gap-[22px]">
        {ingredients &&
          ingredients.map(
            ({
              _id,
              title,
              ingredientThumb,
              measure,
              'thumb-medium': thumbMedium,
              'thumb-small': thumbSmall,
            }) => {
              return (
                <div
                  key={_id}
                  className=" scale-100 ease-in-out duration-300  hover:scale-[1.035] hover:contrast-[0.9] md:mb-[22px]"
                >
                  <div className="mb-[8px] p-[25px] relative rounded-lg flex-col flex items-center bg-primary-text-button-color dark:bg-ingredients-card-bg md:p-[22px] ">
                    <picture>
                      <source
                        media="(min-width: 1440px)"
                        srcSet={ingredientThumb}
                      />
                      <source media="(min-width: 768px)" srcSet={thumbMedium} />
                      <img
                        src={thumbSmall}
                        alt=""
                        className=" md:w-[157px] md:h-[157px] lg:w-[157px] lg:h-[157px] "
                      />
                    </picture>
                  </div>
                  <div className=" flex justify-between items-center md:mt-[14px] ">
                    <p className="font-medium leading-[1.29px] text-[14px] md:text-lg md:leading-6 lg:font-medium lg:text-base lg:leading-[1.33333] ">
                      {t(`ingredients.${title}`)}
                    </p>
                    <p className="mt-[8px] mb-[8px] text-hover-border-color-search dark:text-grey-text-color font-medium leading-[1.29px] text-[14px] md:font-medium md:text-base md:leading-[1.25] lg:text-base">
                      {measure ? measure : 'to your taste'}
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
