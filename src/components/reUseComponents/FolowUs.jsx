import sprite from '../../assets/sprite.svg';

export const FolowUs = () => {
  return (
    <ul className="flex gap-x-[14px] md:gap-x-[16px]">
      <li className="p-[7px] border-[1px] rounded-[10px] border-border-color hover:border-grey-text-color">
        <a
          href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg className="fill-primary-text-color opacity-80 sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px] hover:opacity-100">
            <use href={sprite + '#icon-facebook'}></use>
          </svg>
        </a>
      </li>
      <li className="p-[7px] border-[1px] rounded-[10px] border-border-color hover:border-grey-text-color">
        <a
          href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg className="fill-primary-text-color opacity-80 sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px] hover:opacity-100">
            <use href={sprite + '#icon-instagram'}></use>
          </svg>
        </a>
      </li>
      <li className="p-[7px] border-[1px] rounded-[10px] border-border-color hover:border-grey-text-color">
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
  );
};
