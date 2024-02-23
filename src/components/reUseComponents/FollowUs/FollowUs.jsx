import sprite from '../../../assets/sprite.svg';
import css from './FollowUs.module.css';

export const FollowUs = () => {
  return (
    <button className={css.btnCssbuttons}>
      <span>Follow Us</span>
      <span>
        <svg
          height="18"
          width="18"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          viewBox="0 0 1024 1024"
          className={css.icon}
        >
          <path
            fill="#f3f3f3"
            d="M767.99994 585.142857q75.995429 0 129.462857 53.394286t53.394286 129.462857-53.394286 129.462857-129.462857 53.394286-129.462857-53.394286-53.394286-129.462857q0-6.875429 1.170286-19.456l-205.677714-102.838857q-52.589714 49.152-124.562286 49.152-75.995429 0-129.462857-53.394286t-53.394286-129.462857 53.394286-129.462857 129.462857-53.394286q71.972571 0 124.562286 49.152l205.677714-102.838857q-1.170286-12.580571-1.170286-19.456 0-75.995429 53.394286-129.462857t129.462857-53.394286 129.462857 53.394286 53.394286 129.462857-53.394286 129.462857-129.462857 53.394286q-71.972571 0-124.562286-49.152l-205.677714 102.838857q1.170286 12.580571 1.170286 19.456t-1.170286 19.456l205.677714 102.838857q52.589714-49.152 124.562286-49.152z"
          ></path>
        </svg>
      </span>
      <ul>
        <li>
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
        <li>
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
        <li>
          <a
            href="https://www.youtube.com/c/GoIT"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg className="fill-primary-text-color opacity-80 sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px] hover:opacity-100">
              <use href={sprite + '#icon-youtube'}></use>
            </svg>
          </a>
        </li>
      </ul>
    </button>
  );
};
