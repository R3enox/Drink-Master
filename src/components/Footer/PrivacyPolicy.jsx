import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import '../../i18n';

export const PrivacyPolicy = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="flex flex-wrap gap-x-[153px] lg:gap-x-[689px]">
      <p className="text-grey-text-color text-[12px] leading-[1.33] mb-[8px] md: top-[443px] left-[32px] md:text-[14px] md:leading-[1.29] lg:-[388px]">
        {t('Privacy.date')}
      </p>
      <ul className="flex gap-x-[14px] text-grey-text-color text-[12px] leading-[1.33] md:text-[14px] md:leading-[1.29]">
        <li>
          <Link to={'/'}>
            <p>{t('Privacy.Policy')}</p>
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <p>{t('Privacy.Term')}</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};
