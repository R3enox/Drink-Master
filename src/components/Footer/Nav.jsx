import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import '../../i18n';

export const Nav = () => {
  const { t } = useTranslation();

  return (
    <ul className="flex flex-col gap-y-[14px] font-medium text-[14px] leading-[1.6] text-primary-text-color md:gap-y-[20px]">
      <li className=" hover:text-grey-text-color transition-colors">
        <a>
          <Link to={'/drinks'}>{t('link.Nav.Drinks')}</Link>
        </a>
      </li>
      <li className="hover:text-grey-text-color transition-colors">
        <Link to={'/add'}>{t('link.Nav.AddDrink')}</Link>
      </li>
      <li className="hover:text-grey-text-color transition-colors">
        <Link to={'/my'}>{t('link.Nav.MyDrinks')}</Link>
      </li>
      <li className="hover:text-grey-text-color transition-colors">
        <Link to={'/favorites'}>{t('link.Nav.FavoritesDrinks')}</Link>
      </li>
    </ul>
  );
};
