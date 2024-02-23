import sprite from '../../assets/sprite.svg';
import { DeleteBtn, LinkSeeMore } from '../reUseComponents/Buttons/Buttons';

const DrinksItem = ({ myDrink, onDelete }) => {
  const { _id, drink, drinkThumb, alcoholic, description } = myDrink;

  return (
    <li key={_id} className="md:w-[342px] lg:w-[400px]">
      <img
        src={drinkThumb || 'placeholderImage'}
        alt={drink}
        className="rounded-[8px] mb-[18px] md:mb-[24px]"
      />

      <h2 className="mb-[4px] text-[18px] md:text-[24px] font-[500] leading-[1.33]">
        {drink}
      </h2>
      <p className="mb-[18px] text-[14px] leading-[1.29] text-grey-text-color">
        {alcoholic ? 'Alcoholic' : 'Non-alcoholic'}
      </p>
      <p className="mb-[18px] text-ellipsis  line-clamp-4 text-[14px] mb:text-[16px] leading-[1.29] mb:leading-[1.38]">
        {description}
      </p>
      <div className="flex gap-[8px]">
        <LinkSeeMore to={`/drink/${_id}`}>See more</LinkSeeMore>
        <DeleteBtn onClick={() => onDelete(_id)}>
          <svg className="fill-none hover:inherit w-[24px] h-[24px] ">
            <use href={sprite + '#icon-trash'}></use>
          </svg>
        </DeleteBtn>
      </div>
    </li>
  );
};

export default DrinksItem;
