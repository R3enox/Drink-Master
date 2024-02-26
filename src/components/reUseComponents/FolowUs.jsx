import sprite from '../../assets/sprite.svg';

export const FolowUs = () => {
  return (
    <ul className="flex gap-x-[14px] md:gap-x-[16px]">
      <li className="follow-us-btn">
        <a
          href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg className="follow-us-icon">
            <use href={sprite + '#icon-facebook'}></use>
          </svg>
        </a>
      </li>
      <li className="follow-us-btn">
        <a
          href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg className="follow-us-icon">
            <use href={sprite + '#icon-instagram'}></use>
          </svg>
        </a>
      </li>
      <li className="follow-us-btn">
        <a
          href="https://www.youtube.com/c/GoIT"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg className="follow-us-icon">
            <use href={sprite + '#icon-youtube'}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};
