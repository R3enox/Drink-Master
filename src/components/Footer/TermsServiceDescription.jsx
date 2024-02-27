import { useTranslation } from 'react-i18next';
import '../../i18n';

export const TermsServiceDescription = () => {
  const { t } = useTranslation();
  return (
    <div className="text-[14px] leading-[1.43]  mb-[32px] md:text-[18px] md:leading-[1.33] md:w-[619px] lg:mb-[40px] lg:w-[500px] text-primary-text-color">
      <h3 className=" mb-[12px] text-[18px] md:text-[24px] font-[500] leading-[1.33] text-ellipsis  line-clamp-1">
        {t('FooterModal.Terms.H3')}
      </h3>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px] ">
        {t('FooterModal.Terms.This')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.Terms.H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px]">
        {t('FooterModal.Terms.By')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.Terms.2H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px] ">
        {t('FooterModal.Terms.The')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.Terms.3H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px]">
        {t('FooterModal.Terms.To')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.Terms.4H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px]">
        {t('FooterModal.Terms.All')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.Terms.5H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px]">
        {t('FooterModal.Terms.When')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.Terms.6H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px]">
        {t('FooterModal.Terms.The features')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.Terms.7H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px]">
        {t('FooterModal.Terms.While')}
      </p>
      <h4 className="text-[16px] leading-[1.43]  mb-[4px] md:text-[18px] md:leading-[1.33] md:mb-[6px]">
        {t('FooterModal.Terms.8H4')}
      </h4>
      <p className="mb-[20px]  md:mb-[26px] text-[14px] md:text-[16px]">
        {t('FooterModal.Terms.ThisA')}
      </p>
      <p>{t('FooterModal.Terms.ByA')}</p>
    </div>
  );
};
