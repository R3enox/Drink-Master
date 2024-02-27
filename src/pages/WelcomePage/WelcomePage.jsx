import AuthNav from 'components/AuthNav/AuthNav';
import { useTranslation } from 'react-i18next';
import '../../i18n';

const WelcomePage = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col items-center md:items-start mb-[40px]">
        <div className="typing-container">
          <h1 className="typed welcome-title">{t('title.Welcome')}</h1>
        </div>
        <p className="welcome-desc">{t('pageText.Welcome')}</p>
      </div>
      <div>
        <AuthNav />
      </div>
    </div>
  );
};

export default WelcomePage;
