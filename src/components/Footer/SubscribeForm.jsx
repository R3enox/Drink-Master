import { useForm } from 'react-hook-form';

export const SubscribeForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <div className="md:flex flex-col lg:w-[309px]">
      <p className="text-[14px] leading-[1.43] text-primary-text-color mb-[24px] md:text-[18px] md:leading-[1.33]">
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <form
        className="flex flex-col gap-y-[18px] mb-[80px] md:mb-[134px] lg:mb-[80px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className="w-full pl-[24px] py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color placeholder:text-primary-text-color outline-0 text-[14px] leading-[1.29] md:text-[17px] md:py-[14px] md:leading-[1.56] "
          type="email"
          placeholder="Enter the email"
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'This is an ERROR email.',
            },
          })}
        />
        <button
          className="w-full text-center py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color transition-colors md:text-[17px] md:py-[14px] md:leading-[1.56]"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};
