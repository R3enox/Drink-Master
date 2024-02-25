import { useForm } from 'react-hook-form';
import { BtnSubscribe } from '../reUseComponents/Buttons/Buttons';
import { useDispatch } from 'react-redux';
import { subscribeUserThunk } from '../../redux/auth/authOperations';
import sprite from '../../assets/sprite.svg';

export const SubscribeForm = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({ mode: 'onChange' });
  const onSubmit = ({ email }) => {
    dispatch(subscribeUserThunk({ email }));
    reset();
  };
  console.log(dirtyFields);
  return (
    <div className="md:flex flex-col lg:w-[309px]">
      <p className="text-[14px] leading-[1.43] text-primary-text-color mb-[24px] md:text-[18px] md:leading-[1.33]">
        Subscribe up to our newsletter. Be in touch with latest news and special
        offers, etc.
      </p>
      <form
        className="relative flex flex-col gap-y-[18px] mb-[80px] md:mb-[134px] lg:mb-[80px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <input
          className={` w-full pl-[24px] py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color placeholder:text-primary-text-color outline-0 text-[14px] leading-[1.29] md:text-[17px] md:py-[14px] md:leading-[1.56]  ${
            errors?.email && 'error'
          } ${dirtyFields?.email && !errors.email && 'correct'}`}
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
        {errors?.email && (
          <>
            <svg className="absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-error-color stroke-error-color">
              <use href={sprite + '#icon-error'}></use>
            </svg>
          </>
        )}
        {dirtyFields?.email && !errors.email && (
          <>
            <svg className="absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-correct-color stroke-correct-color">
              <use href={sprite + '#icon-done'}></use>
            </svg>
          </>
        )}
        <BtnSubscribe>Subscribe</BtnSubscribe>
      </form>
    </div>
  );
};
