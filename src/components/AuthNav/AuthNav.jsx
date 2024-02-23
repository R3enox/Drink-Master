import { Link } from 'react-router-dom';
import { LinkSignUp } from '../reUseComponents/Buttons/Buttons';
// import {
//   DeleteBtn,
//   LinkDarkTheme,
//   LinkHeaderNav,
//   LinkSeeMore,
// } from '../reUseComponents/Buttons/Buttons';
// import sprite from '../../assets/sprite.svg';

const AuthNav = () => {
  return (
    <div>
      <ul className="flex  justify-center items-center gap-3.5 md:justify-start md:items-center">
        <li className="flex blob justify-center items-center">
          <Link className="btn-up welcome-sign-up-link" to="/signup">
            <span className="text">Sign Up</span>
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link className="btn-in welcome-sign-in-link" to="/signin">
            <span className="text">Sign In</span>
          </Link>

          {/* <LinkDarkTheme to="/add">Add drinks</LinkDarkTheme> */}

          {/* <LinkHeaderNav>Home</LinkHeaderNav> */}

          {/* <LinkSeeMore>See more</LinkSeeMore> */}
          {/* 
          <DeleteBtn>
            <svg className="fill-none w-[24px] h-[24px] ">
              <use href={sprite + '#icon-trash'}></use>
            </svg>
          </DeleteBtn> */}
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
