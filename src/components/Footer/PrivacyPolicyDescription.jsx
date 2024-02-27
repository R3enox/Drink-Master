import { useTranslation } from 'react-i18next';
import '../../i18n';

export const PrivacyPolicyDescription = () => {
  const { t } = useTranslation();
  return (
    <div className=" leading-[1.43]  mb-[32px] md:text-[18px] md:leading-[1.33] md:w-[619px] lg:mb-[40px] lg:w-[500px] text-primary-text-color">
      <h3 className=" mb-[12px] text-[18px] md:text-[24px] font-[500] leading-[1.33] text-ellipsis  line-clamp-1">
        {t('FooterModal.PrivacyPolicy.H3')}
      </h3>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px] ">
        {t('FooterModal.PrivacyPolicy.Your')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.PrivacyPolicy.H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px]">
        {t('FooterModal.PrivacyPolicy.We')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.PrivacyPolicy.2H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px]  text-[14px] md:text-[16px]">
        {t('FooterModal.PrivacyPolicy.We use')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.PrivacyPolicy.3H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px]text-[14px] md:text-[16px] ">
        {t('FooterModal.PrivacyPolicy.We take')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.PrivacyPolicy.4H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px]">
        {t('FooterModal.PrivacyPolicy.We do')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.PrivacyPolicy.5H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px]text-[14px] md:text-[16px] ">
        {t('FooterModal.PrivacyPolicy.We may')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.PrivacyPolicy.6H4')}
      </h4>
      <p className="text-[14px] md:text-[16px]">
        {t('FooterModal.PrivacyPolicy.If')}
      </p>
    </div>
  );
};
