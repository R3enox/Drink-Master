import { Link } from 'react-router-dom';
import css from './Buttons.module.css';

// Dark Theme:
// BUTTONS_LINKS: Add drink / Other drinks / Add / Add favorite drinks

export const LinkDarkTheme = ({ children, to }) => {
  return (
    <div className="flex">
      <Link to={to} className={css.button}>
        <div className={css.dotsBorder}></div>
        <span className={css.textButton}>{children}</span>
      </Link>
    </div>
  );
};

export const BtnDarkTheme = ({ children }) => {
  return (
    <button type="submit" className={css.button}>
      <div className={css.dotsBorder}></div>
      <span className={css.textButton}>{children}</span>
    </button>
  );
};

// BUTTONS_LINKS: See more / Delete Button / Header Nav Links

export const LinkSeeMore = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="bg-primary-text-button-color hover:bg-filter-scroll-text font-semibold transition
      shadow-lg hover:shadow-primary-text-color/50 text-primary-text-color py-[14px] px-[40px] rounded-[42px] 
      text-[14px] leading-[1.29] md:py-[18px] md:px-[44px] md:text-[16px] md:leading-[1.12];"
    >
      {children}
    </Link>
  );
};

export const DeleteBtn = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="min-w-[46px] h-[46px] md:min-w-[56px] md:h-[54px] rounded-[40px] 
       hover:bg-filter-scroll-text transition shadow-lg hover:shadow-primary-text-color/50 bg-primary-text-button-color
       p-[11px] md:py-[15px] md:px-[16px] stroke-primary-text-color"
    >
      {children}
    </button>
  );
};

export const LinkHeaderNav = ({ children, to }) => {
  return (
    <Link
      to={to}
      className=" text-primary-text-button-color dark:text-primary-text-color hover:text-primary-text-color hover:bg-primary-text-button-color transition shadow-lg hover:shadow-primary-text-button-color/50 dark:hover:shadow-primary-text-color/50 bg-transparent py-[8px] px-[16px] rounded-[40px] border-[1px] border-border-color-for-light dark:border-border-color text-[14px] leading-[1.6] font-medium "
    >
      {children}
    </Link>
  );
};

export const BtnSubscribe = ({ children }) => {
  return (
    <button
      type="submit"
      className="transition shadow-lg hover:shadow-primary-text-color/50 bg-transparentw-full text-center py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color md:text-[17px] md:py-[14px] md:leading-[1.56]"
    >
      {children}
    </button>
  );
};

// Light Theme in Future:

// export const LinkLightTheme = ({ children }) => {
//   return (
//     <Link className={`${css.btnTransparent} ${css.button}`}>
//       <div className={`${css.dotsBorder} ${css.dotsBorderTransparent}`}></div>
//       <span className={`${css.textBtnTransparent} ${css.textButton}`}>
//         {children}
//       </span>
//     </Link>
//   );
// };

// export const BtnLightTheme = ({ children }) => {
//   return (
//     <Link className={`${css.btnTransparent} ${css.button}`}>
//       <div className={`${css.dotsBorder} ${css.dotsBorderTransparent}`}></div>
//       <span className={`${css.textBtnTransparent} ${css.textButton}`}>
//         {children}
//       </span>
//     </Link>
//   );
// };
