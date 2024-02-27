import { FolowUs } from '../../components/reUseComponents/FolowUs';

import { useTranslation } from 'react-i18next';
import '../../i18n';

export const FollowUs = () => {
  const { t } = useTranslation();
  return (
    <section className="pb-10 md:pb-20">
      <h2 className="font-medium text-lg mb-5 md:text-2xl md:mb-6 ">
        {t('title2.FolowUs')}
      </h2>
      <FolowUs />
    </section>
  );
};
