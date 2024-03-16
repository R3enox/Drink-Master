import { Link } from 'react-router-dom';
import sprite from '../../assets/sprite.svg';
import { DeleteBtn, LinkSeeMore } from '../reUseComponents/Buttons/Buttons';

import { useTranslation } from 'react-i18next';
import '../../i18n';

const DrinksItem = ({ myDrink, openMyDrinkModal, onChooseItem }) => {
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language;

  const { _id, drink, drinkThumb, alcoholic, description, descriptionUK } =
    myDrink;

  const openModal = () => {
    openMyDrinkModal();
    onChooseItem(_id);
  };

  return (
    <li
      key={_id}
      className="flex flex-col gap-[18px] md:gap-[24px] w-[335px] md:w-[342px] lg:w-[400px]"
    >
      <Link to={`../drink/${_id}`} className="overflow-hidden rounded-[8px]">
        <img
          src={drinkThumb || 'placeholderImage'}
          alt={drink}
          className="w-[335px] h-[360px] mb:w-[342px] mb:h-[360px] lg:w-[400px] lg:h-[400px] rounded-[8px] object-cover scale-100 ease-in-out duration-300  hover:scale-[1.035] hover:contrast-[0.9]"
        />
      </Link>

      <h3 className="mb-[4px] text-[18px] md:text-[24px] font-[500] leading-[1.33] text-ellipsis  line-clamp-1">
        {drink}
      </h3>

      <p className="mb-[18px] text-[14px] md:mb-[24px] leading-[1.29] hover-border-color-search dark:text-grey-text-color">
        {alcoholic ? t('cocktailType.alco') : t('cocktailType.non')}
      </p>
      <p className="h-[75px] mb-[18px] md:mb-[24px]  md:h-[110px]  lg:h-[90px] text-ellipsis  line-clamp-4 md:line-clamp-5 lg:line-clamp-4 text-[14px] md:text-[16px] leading-[1.29] md:leading-[1.38]">
        {currentLng === 'uk' ? descriptionUK : description}
      </p>
      <div className="flex gap-[8px]">
        <LinkSeeMore to={`/drink/${_id}`}>
          {t('link.DrinksItem.SeeMore')}
        </LinkSeeMore>
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
