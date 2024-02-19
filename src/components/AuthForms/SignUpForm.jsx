import { useForm } from 'react-hook-form';
import { signUpThunk } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuthToken } from '../../redux/auth/authSelectors';
import Calendar from '../DatePicker/Calendar';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const navigate = useNavigate();

  const {
    onBlur,
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(signUpThunk(data));

    if (token) navigate('/home');
    reset();
  };

  return (
    <div className="container pt-[191px] bg-mobile-bg-welcome h-full bg-contain bg-right bg-no-repeat">
      <form
        className="flex flex-col w-[335px] gap-[14px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className=" text-welcome-text-color text-[28px]  mb-[28px]">
          Sign Up
        </h1>
        <input
          className="w-full bg-transparent h-[54px] rounded-[42px] border-[1px] border-border-color  hover:border-grey-text-color hover:color-transparent text-[14px] leading-[1.29] placeholder-border-color py-[18px] px-[24px] outline-none"
          onBlur={onBlur}
          type="text"
          placeholder="Name"
          autoComplete="off"
          {...register('name', {
            required: { value: true, message: 'This is an ERROR name' },
            min: 2,
            maxLength: 20,
            pattern:
              /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
          })}
        />
        <Calendar />
        <input
          className=" hover:border-grey-text-color hover:color-transparent w-full bg-transparent h-[54px] rounded-[42px] border-[1px] border-border-color text-[14px] leading-[1.29] placeholder-border-color py-[18px] px-[24px] outline-none"
          onBlur={onBlur}
          type="email"
          placeholder="Email"
          autoComplete="off"
          {...register('email', {
            required: 'Email is required.',
            pattern: {
              value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
              message: 'This is an ERROR email.',
            },
          })}
        />

        {/* {errors.email && errors.email.type === 'pattern' ? (
          <p className="errorMsg">This is an ERROR email.</p>
        ) : (
          <p>This is an CORRECT email</p>
        )} */}

        <input
          className="hover:border-grey-text-color hover:color-transparent w-full bg-transparent h-[54px] rounded-[42px] border-[1px] border-border-color text-[14px] leading-[1.29] placeholder-border-color py-[18px] px-[24px] outline-none"
          onBlur={onBlur}
          type="password"
          placeholder="Password"
          autoComplete="off"
          {...register('password', {
            required: 'Password is required.',
            minLength: 6,
            pattern: {
              value: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/i',
              message: 'This is an ERROR password.',
            },
          })}
        />
        {/* {errors.password && errors.password.type === 'minLength' ? (
      <p>Password should be at-least 6 characters.</p>
    ) : (
      <p>This is an CORRECT password</p>
    )} */}
        <button
          className="bg-primary-text-color text-primary-text-button-color font-semibold py-[14px] px-[40px] rounded-[42px] text-[14px] leading-[1.29] "
          type="submit"
        >
          Sign Up
        </button>

        <Link
          className="underline decoration-grey-text-color font-semibold text-center text-primary-text-color text-[12px] leading-[1.29]"
          to="/signin"
        >
          Sign In
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
