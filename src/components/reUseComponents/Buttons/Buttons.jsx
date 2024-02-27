import { Link, NavLink } from 'react-router-dom';
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

export const BtnDarkTheme = ({ children, name }) => {
  return (
    <button type="submit" name={name} className={css.button}>
      <div className={css.dotsBorder}></div>
      <span className={css.textButton}>{children}</span>
    </button>
  );
};
export const ButtonComponentDarkTheme = ({ descr, btnFunction, id }) => {
  return (
    <button
      className={css.button}
      type="button"
      onClick={() => btnFunction(id)}
      disabled={!id}
    >
      <div className={css.dotsBorder}></div>
      <span className={css.textButton}>{descr}</span>
    </button>
  );
};

export const ButtonComponentLightTheme = ({ descr, btnFunction, id }) => {
  return (
    <button
      className={`${css.btnTransparent} ${css.button}`}
      type="button"
      onClick={() => btnFunction(id)}
      disabled={!id}
    >
      <div className={`${css.dotsBorder} ${css.dotsBorderTransparent}`}></div>
      <span className={`${css.textBtnTransparent} ${css.textButton}`}>
        {descr}
      </span>
    </button>
  );
};

// BUTTONS_LINKS: See more / Delete Button / Header Nav Links

export const LinkSeeMore = ({ children, to }) => {
  return (
    <Link
      to={to}
      className="bg-primary-text-button-color dark:hover:bg-filter-scroll-text font-semibold transition
      shadow-lg hover:shadow-primary-text-button-color/50 dark:hover:shadow-primary-text-color/50 text-primary-text-color py-[14px] px-[40px] rounded-[42px] 
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
       dark:hover:bg-filter-scroll-text transition shadow-lg hover:shadow-primary-text-button-color/50 dark:hover:shadow-primary-text-color/50 bg-primary-text-button-color
       p-[11px] md:py-[15px] md:px-[16px] stroke-primary-text-color"
    >
      {children}
    </button>
  );
};

//

export const LinkHeaderNav = ({ children, to }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        return (
          'py-[8px] px-[16px] rounded-[40px] border-[1px] text-[14px] leading-[1.6] font-medium dark:border-border-color border-border-color-for-light ' +
          (!isActive
            ? 'text-primary-text-button-color dark:text-primary-text-color bg-transparent'
            : 'text-primary-text-color bg-primary-text-button-color transition shadow-lg shadow-primary-text-button-color/50 dark:shadow-primary-text-color/50 ')
        );
      }}
    >
      {children}
    </NavLink>
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

// Light Theme:
// BUTTONS_LINKS: Add drink / Other drinks / Add / Add favorite drinks

export const LinkLightTheme = ({ children, to }) => {
  return (
    <div className="flex">
      <Link to={to} className={`${css.btnTransparent} ${css.button}`}>
        <div className={`${css.dotsBorder} ${css.dotsBorderTransparent}`}></div>
        <span className={`${css.textBtnTransparent} ${css.textButton}`}>
          {children}
        </span>
      </Link>
    </div>
  );
};

export const BtnLightTheme = ({ children, to }) => {
  return (
    <button
      type="submit"
      to={to}
      className={`${css.btnTransparent} ${css.button}`}
    >
      <div className={`${css.dotsBorder} ${css.dotsBorderTransparent}`}></div>
      <span className={`${css.textBtnTransparent} ${css.textButton}`}>
        {children}
      </span>
    </button>
  );
};
