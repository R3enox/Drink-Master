import { useForm } from 'react-hook-form';
import { BtnSubscribe } from '../reUseComponents/Buttons/Buttons';

import { useTranslation } from 'react-i18next';
import '../../i18n';

export const SubscribeForm = () => {
  const { t, i18n } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    // console.log(data);
    reset();
  };

  // console.log(errors);

  return (
    <div className="md:flex flex-col lg:w-[309px]">
      <p className="text-[14px] leading-[1.43] text-primary-text-color mb-[24px] md:text-[18px] md:leading-[1.33]">
        {t('SubscribeForm.text')}
      </p>
      <form
        className="flex flex-col gap-y-[18px] mb-[80px] md:mb-[134px] lg:mb-[80px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full pl-[24px] py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color placeholder:text-primary-text-color outline-0 text-[14px] leading-[1.29] md:text-[17px] md:py-[14px] md:leading-[1.56] "
          type="email"
          placeholder={t('inputPlaceholder.SubscribeForm.email')}
          {...register('email', {
            required: `${t('inputPlaceholder.SignInForm.emailValid')}`,
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: `${t('inputPlaceholder.SignInForm.emailPatternError')}`,
            },
          })}
        />
        <BtnSubscribe>{t('button.SubscribeForm.BtnSubscribe')}</BtnSubscribe>
      </form>
    </div>
  );
};
