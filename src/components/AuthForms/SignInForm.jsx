import { useForm } from 'react-hook-form';
import { signInThunk } from '../../redux/auth/authOperations';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

const SignInForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    onBlur,
    register,
    handleSubmit,
    // formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    dispatch(signInThunk(data));
    navigate('/home');

    reset();
  };

  return (
    <div className="container pt-[259px] bg-mobile-bg-welcome h-full bg-contain bg-right bg-no-repeat">
      <form
        className="flex flex-col w-[335px] gap-[14px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className=" text-welcome-text-color text-[28px]  mb-[28px]">
          Sign In
        </h1>
        <input
          className="w-full bg-transparent h-[54px] rounded-[42px] border-[1px] border-border-color  hover:border-grey-text-color hover:color-transparent text-[14px] leading-[1.29] placeholder-border-color py-[18px] px-[24px] outline-none"
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
          className="w-full bg-transparent h-[54px] rounded-[42px] border-[1px] border-border-color hover:border-grey-text-color hover:color-transparent text-[14px] leading-[1.29] placeholder-border-color py-[18px] px-[24px] outline-none"
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
          Sign In
        </button>

        <Link
          className="underline decoration-grey-text-color font-semibold text-center text-primary-text-color text-[12px] leading-[1.29]"
          to="/signup"
        >
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default SignInForm;
