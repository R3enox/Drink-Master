import { Link } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <ul className="flex justify-center items-center gap-3.5 md:justify-start md:items-start">
        <li className="">
          <Link className="btn-up welcome-sign-up-link" to="/signup">
            <span className="text">Sign Up</span>
          </Link>
        </li>
        <li>
          <Link className="btn-in welcome-sign-in-link" to="/signin">
            <span className="text">Sign In</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
