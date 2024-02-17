import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <ul className="flex justify-center items-center gap-3.5">
      <li className="">
        <Link
          className="bg-primary-text-color text-primary-text-button-color font-semibold py-[14px] px-[40px] rounded-[42px] text-[14px] leading-[1.29] "
          to="/signup"
        >
          Sign Up
        </Link>
      </li>
      <li>
        <Link
          className="bg text-primary-text-color font-semibold py-[14px] px-[40px] rounded-[42px] border-[1px] border-grey-text-color text-[14px] leading-[1.29]"
          to="/signin"
        >
          Sign In
        </Link>
      </li>
    </ul>
  );
};

export default AuthNav;
