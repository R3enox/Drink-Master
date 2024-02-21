import { Link } from 'react-router-dom';
import { useDeleteMyDrinkMutation } from '../../redux/myDrinks/myDrinksSlice';

import sprite from '../../assets/sprite.svg';

const DrinksItem = ({ myDrink, onDelete }) => {
  const { _id, drink, drinkThumb, alcoholic, description } = myDrink;
  const [deleteMyDrink] = useDeleteMyDrinkMutation();

  const handleDelete = async () => {
    try {
      await deleteMyDrink(_id);
    } catch (error) {
      console.error('Error deleting drink', error);
    }
  };

  return (
    <li key={_id} className="md:w-[342px] lg:w-[400px]">
      <img
        src={drinkThumb || 'placeholderImage'}
        alt={drink}
        className="rounded-[8px] mb-[18px] md:mb-[24px]"
      />
      <h3 className="mb-[4px] text-[18px] md:text-[24px] font-[500] leading-[1.33]">
        {drink}
      </h3>
      <p className="mb-[18px] text-[14px] leading-[1.29] text-grey-text-color">
        {alcoholic ? 'Alcoholic' : 'Non-alcoholic'}
      </p>
      <p className="mb-[18px] text-ellipsis  line-clamp-4 text-[14px] mb:text-[16px] leading-[1.29] mb:leading-[1.38]">
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
          onClick={handleDelete}
          className="transition-colors min-w-[46px] h-[46px] md:min-w-[56px] md:h-[54px] rounded-[40px] bg-primary-text-button-color hover:bg-primary-text-color p-[11px] md:py-[15px] md:px-[16px] stroke-primary-text-color hover:stroke-primary-text-button-color"
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
