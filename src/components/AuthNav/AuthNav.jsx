import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <ul className="flex justify-center items-center gap-3.5 md:justify-start md:items-start">
      <li className="">
        <Link className="welcome-sign-up-link" to="/signup">
          Sign Up
        </Link>
      </li>
      <li>
        <Link className="welcome-sign-in-link" to="/signin">
          Sign In
        </Link>
      </li>
    </ul>
  );
};

export default AuthNav;
