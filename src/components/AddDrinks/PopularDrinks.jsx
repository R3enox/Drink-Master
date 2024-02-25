import { useTranslation } from 'react-i18next';
import '../../i18n';

export const PopularDrinks = () => {
  const { t, i18n } = useTranslation();
  return (
    <section>
      <h2 className="font-medium text-lg text-primary-text-color mb-5  md:text-2xl md:mb-6 ">
        {t('title2.PopularDrinks')}
      </h2>
    </section>
  );
};
