import { Link } from 'react-router-dom';

import { useTranslation } from 'react-i18next';
import '../../i18n';

const AuthNav = () => {
  const { t } = useTranslation();

  return (
    <div>
      <ul className="flex  justify-center items-center gap-3.5 md:justify-start md:items-center">
        <li className="flex blob justify-center items-center">
          <Link className="btn-up welcome-sign-up-link" to="/signup">
            <span className="text"> {t('link.SignInForm.SignUp')}</span>
          </Link>
        </li>
        <li className="flex justify-center items-center">
          <Link className="btn-in welcome-sign-in-link" to="/signin">
            <span className="text">{t('button.SignInForm.SignIn')}</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AuthNav;
