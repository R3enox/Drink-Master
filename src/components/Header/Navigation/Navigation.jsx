import { useMainNav } from '../../../../hooks/useMainNav';
import { LinkHeaderNav } from '../../reUseComponents/Buttons/Buttons';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const Navigation = () => {
  const { t } = useTranslation();
  const mainNav = useMainNav();

  return (
    <nav className="sm:hidden md:hidden lg:block">
      <ul className="flex gap-x-[16px] ml-auto">
        {mainNav.map(({ id, href, title }) => (
          <li key={id}>
            <LinkHeaderNav to={href}>{t(`Header.${title}`)}</LinkHeaderNav>
          </li>
        ))}
      </ul>
    </nav>
  );
};
