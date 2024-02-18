import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

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
  console.log(errors);

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
          className="w-full pl-[24px] py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color placeholder:text-primary-text-color outline-0 text-[14px] leading-[1.29] md:text-[17px] md:py-[14px] md:leading-[1.56]"
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
          className="w-full text-center py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold md:text-[17px] md:py-[14px] md:leading-[1.56]"
          type="submit"
        >
          Subscribe
        </button>
      </form>

      <p className="text-grey-text-color text-[12px] leading-[1.33] mb-[8px] md:absolute top-[440px] left-[32px] md:text-[14px] md:leading-[1.29] lg:top-[396px]">
        ©2023 Drink Master. All rights reserved.
      </p>
      <ul className="flex gap-x-[14px] text-grey-text-color text-[12px] leading-[1.33] md:text-[14px] md:leading-[1.29]">
        <li>
          <Link to={'/'}>
            <p>Privacy Policy</p>
          </Link>
        </li>
        <li>
          <Link to={'/'}>
            <p>Terms of Service</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};