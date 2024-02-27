import { useTranslation } from 'react-i18next';
import sprite from '../../../assets/sprite.svg';
import css from './FollowUs.module.css';

import '../../../i18n';

export const FollowUs = () => {
  const { t, i18n } = useTranslation();
  return (
    <button className={css.btnCssbuttons}>
      <span>{t('button.FollowUs')}</span>
      <span>
        <svg height="18" width="18" className={css.icon}>
          <use href={sprite + '#icon-follow-us'}></use>
        </svg>
      </span>
      <ul>
        <li className="border-transparent p-[7px] hover:border-[1px] rounded-[10px] hover:border-grey-text-color">
          <a
            href="https://www.facebook.com/goITclub/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className="icon fill-primary-text-color opacity-80 sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px] hover:opacity-100">
              <use href={sprite + '#icon-facebook'}></use>
            </svg>
          </a>
        </li>
        <li className="border-transparent p-[10px] hover:border-[1px] rounded-[10px] hover:border-grey-text-color">
          <a
            href="https://www.instagram.com/goitclub/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className="icon fill-primary-text-color opacity-80 sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px] hover:opacity-100">
              <use href={sprite + '#icon-instagram'}></use>
            </svg>
          </a>
        </li>
        <li className="border-transparent p-[7px] hover:border-[1px] rounded-[10px] hover:border-grey-text-color">
          <a
            href="https://www.youtube.com/c/GoIT"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className="icon fill-primary-text-color opacity-80 sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px] hover:opacity-100">
              <use href={sprite + '#icon-youtube'}></use>
            </svg>
          </a>
        </li>
      </ul>
    </button>
  );
};
