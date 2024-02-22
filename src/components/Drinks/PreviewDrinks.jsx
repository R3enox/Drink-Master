import { useGetDrinksQuery } from '../../redux/drinks/drinksAPI';
import { DrinkCardPreview } from '../reUseComponents/DrinkCardPreview';
import { Link } from 'react-router-dom';
import { useFilters } from '../../hooks/useFilters';
const popularCategories = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
];

export const PreviewDrinks = () => {
  const { data, isLoading } = useGetDrinksQuery();

  const { categories } = useFilters();
  const filteredCategories =
    categories &&
    popularCategories.filter((category) => categories.includes(category));

  return isLoading ? (
    <div>Loading</div>
  ) : (
    data && (
      <div className="container m-auto conflex flex-col gap-[60px] pb-[80px] md:gap-[80px] pt-[56px] md:pt-[61px] md:pb-[140px] lg:pt-[80px]">
        <ul className="flex flex-col gap-[40px] mb-[60px] md:gap-[80px] md:mb-[80px]">
          {filteredCategories.map((category) => (
            <li key={category}>
              <p className="font-semibold text-[28px] md:text-[40px] leading-[1.14] md:leading-[1.1] pb-[24px] md:pb-[40px]">
                {category}
              </p>
              <ul className="flex flex-wrap flex-row md:gap-[20px] overflow-hidden h-[392px] md:h-[398px] lg:h-[438px]">
                {data
                  .filter((drink) => category === drink.category)
                  .map((drink) => (
                    <DrinkCardPreview key={drink._id} drink={drink} />
                  ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="flex justify-center ">
          <Link
            to="/drinks"
            className="px-[40px] py-[14px] md:px-[44px] md:py-[18px] font-semibold text-[14px] leading-[1.28] md:text-[16px] md:leading-[1.25] bg-primary-text-color text-primary-text-button-color text-center border-border-color rounded-[42px] transition-shadow shadow-lg hover:shadow-primary-text-color/50"
          >
            Other drinks
          </Link>
        </div>
      </div>
    )
  );
};
