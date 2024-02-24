import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { DeleteBtn, LinkSeeMore } from '../reUseComponents/Buttons/Buttons';

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
        <LinkSeeMore to={`/drink/${_id}`}>See more</LinkSeeMore>
        <DeleteBtn onClick={openModal}>
          <svg className="fill-none hover:inherit w-[24px] h-[24px] ">
            <use href={sprite + '#icon-trash'}></use>
          </svg>
        </DeleteBtn>
      </div>
    </li>
  );
};

export default DrinksItem;
