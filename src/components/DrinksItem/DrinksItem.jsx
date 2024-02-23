import { Link } from 'react-router-dom';

import sprite from '../../assets/sprite.svg';

const DrinksItem = ({ myDrink, openMyDrinkModal, onChooseItem }) => {
  const { _id, drink, drinkThumb, alcoholic, description } = myDrink;
  const openModal = () => {
    openMyDrinkModal();
    onChooseItem(_id);
  };

  return (
    <li key={_id} className="md:w-[342px] lg:w-[400px]">
      <Link to={`/drink/${_id}`} className="overflow-hidden rounded-[8px]">
        <img
          src={drinkThumb || 'placeholderImage'}
          alt={drink}
          className="rounded-[8px] mb-[18px] md:mb-[24px] object-cover scale-100 ease-in-out duration-300  hover:scale-[1.035] hover:contrast-[0.9]"
        />
      </Link>

      <h3 className="mb-[4px] text-[18px] md:text-[24px] font-[500] leading-[1.33] text-ellipsis  line-clamp-1">
        {drink}
      </h3>
      <p className="mb-[18px] text-[14px] md:mb-[24px] leading-[1.29] text-grey-text-color">
        {alcoholic ? 'Alcoholic' : 'Non-alcoholic'}
      </p>
      <p className="mb-[18px] md:mb-[24px] text-ellipsis  line-clamp-4 text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.38]">
        {description}
      </p>
      <div className="flex gap-[8px]">
        <Link
          className="transition-colors bg-primary-text-button-color   hover:bg-primary-text-color  hover:text-hover-text-color  py-[14px] px-[40px] md:py-[18px] md:px-[44px] rounded-[42px] text-[14px] md:text-[16px] font-[600] leading-[1.29] md:leading-[1.26] border-none"
          to={`/drink/${_id}`}
        >
          See more
        </Link>
        <button
          type="button"
          onClick={openModal}
          className="px-[14px] py-[13px] md:px-[16px]  md:py-[15px] rounded-[40px] bg-primary-text-button-color hover:bg-primary-text-color p-[11px] stroke-primary-text-color hover:stroke-primary-text-button-color transition-colors"
        >
          <svg className="fill-none hover:inherit w-[24px] h-[24px] ">
            <use href={sprite + '#icon-trash'}></use>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default DrinksItem;
