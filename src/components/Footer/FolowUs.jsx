import spite from '../../assets/sprite.svg';

export const FolowUs = () => {
  return (
    <ul className="flex gap-x-[14px]">
      <li className="p-[8px] border-[1px] rounded-[10px] border-border-color">
        <a
          href="https://www.facebook.com/goITclub/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg className="fill-primary-text-color sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
            <use href={spite + '#icon-facebook'}></use>
          </svg>
        </a>
      </li>
      <li className="p-[8px] border-[1px] rounded-[10px] border-border-color">
        <a
          href="https://www.instagram.com/goitclub/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg className="fill-primary-text-color sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
            <use href={spite + '#icon-instagram'}></use>
          </svg>
        </a>
      </li>
      <li className="p-[8px] border-[1px] rounded-[10px] border-border-color">
        <a
          href="https://www.youtube.com/c/GoIT"
          target="_blank"
          rel="noreferrer noopener"
        >
          <svg className="fill-primary-text-color sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
            <use href={spite + '#icon-youtube'}></use>
          </svg>
        </a>
      </li>
    </ul>
  );
};
