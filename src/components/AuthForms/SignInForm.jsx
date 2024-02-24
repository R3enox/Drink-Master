import { useForm } from 'react-hook-form';
import { signInThunk } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';

const SignInForm = () => {
  const isLoading = useSelector(selectAuthIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    dispatch(signInThunk(data));
    navigate('/home');
    reset();
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <form
      className="flex flex-col w-[335px] md:w-[400px] lg:w-[400px]"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="form-title">Sign In</h1>
      <div className="input-container">
        <div className="relative">
          <input
            className={`input-form ${errors?.email && 'error'} ${
              dirtyFields.email && !errors.email && 'correct'
            }`}
            type="email"
            placeholder="Email"
            autoComplete="off"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: 'This is an ERROR email',
              },
            })}
          />
          {errors?.email && (
            <>
              <svg className="absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-error-color stroke-error-color">
                <use href={sprite + '#icon-error'}></use>
              </svg>
              <p className="errorMsg">{errors.email.message}</p>
            </>
          )}
          {dirtyFields.email && !errors.email && (
            <>
              <svg className="absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-correct-color stroke-correct-color">
                <use href={sprite + '#icon-done'}></use>
              </svg>
              <p className="correctMsg">This is a CORRECT email</p>
            </>
          )}
        </div>
        <div className="relative">
          <input
            className={`input-form ${errors?.password && 'error'} ${
              dirtyFields.password && !errors.password && 'correct'
            }`}
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            autoComplete="off"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password has to be at least 6 characters',
              },
              pattern: {
                value: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/i',
                message: 'This is an ERROR password',
              },
            })}
          />
          {showPassword ? (

            <svg
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-none stroke-primary-text-color cursor-pointer  rounded-full"
            >
              <use href={sprite + '#icon-eye'}></use>
            </svg>
          ) : (
            <svg
              onClick={() => {
                setShowPassword(!showPassword);
              }}
              className="absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-none stroke-primary-text-color cursor-pointer  rounded-full"
            >
              <use href={sprite + '#icon-eye-off'}></use>
            </svg>
          )}
          {errors?.password && (
            <p className="errorMsg">{errors.password.message}</p>
          )}
          {dirtyFields.password && !errors.password && (
            <p className="correctMsg">This is a CORRECT password</p>
          )}
        </div>
      </div>
      <div className="btn-container">
        <button className="btn-up sign-btn" type="submit">
          Sign In
        </button>
        <Link className="sign-link-btn" to="/signup">
          Sign Up
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
