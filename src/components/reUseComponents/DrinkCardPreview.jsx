import { Link } from 'react-router-dom';
import defaultImgDrink from '../../assets/block.jpg';
// заглушка для фото
export const DrinkCardPreview = ({ drink }) => {
  const imageSrc = drink.drinkThumb || defaultImgDrink;
  return (
    <li key={drink._id} className="flex flex-col gap-[14px]">
      {/* <div className="overflow-hidden rounded-[8px] ]"> */}
      <Link
        to={`../drink/${drink._id}`}
        className="overflow-hidden rounded-[8px]"
      >
        <img
          src={imageSrc}
          alt={drink.drink}
          className="w-[335px] md:w-[342px] lg:w-[400px] h-[360px] lg:h-[400px] object-cover scale-100 ease-in-out duration-300  hover:scale-[1.035] hover:contrast-[0.9]"
        />
      </Link>
      {/* </div> */}
      <div className="flex justify-between">
        <p className="text-[16px] md:text-[18px] leading-[1.125] md:leading-[1.333]">
          {drink.drink}
        </p>
        <Link
          to={`../drink/${drink._id}`}
          className="block h-full text-grey-text-color hover:text-hover-text-color leading-[1.29] md:leading-[1.125]"
        >
          See more
        </Link>
      </div>
    </li>
  );
};
