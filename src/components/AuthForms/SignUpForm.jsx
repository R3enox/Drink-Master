import { useForm } from 'react-hook-form';
import { signUpThunk } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import {
  selectAuthIsLoading,
  selectAuthToken,
} from '../../redux/auth/authSelectors';
import { DevTool } from '@hookform/devtools';
import Calendar from '../DatePicker/Calendar';
import { useState } from 'react';
import Loader from '../Loader/Loader';
import sprite from '../../assets/sprite.svg';

const SignUpForm = () => {
  const { isLoading } = useSelector(selectAuthIsLoading);
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const navigate = useNavigate();
  const [dateOfBirth, setDateOfBirth] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
    control,
  } = useForm({
    mode: 'onChange',
  });

  const getDateOfBirth = (date) => {
    setDateOfBirth(date);
  };

  const onSubmit = (data) => {
    data.dateOfBirth = dateOfBirth;
    dispatch(signUpThunk(data));
    console.log('first');
    if (token) {
      console.log('second');
      navigate('/home');
    }

    reset();
  };

  return (
    <div className="form-sign-up-bg-container">
      {isLoading && <Loader />}
      <div className="form-sign-up-container">
        <form
          className="flex flex-col w-[335px]"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <h1 className="form-title">Sign Up</h1>
          <div className="input-container">
            <div>
              <input
                className={`input-form ${errors?.name && 'error'} ${
                  dirtyFields.name && !errors.name && 'correct'
                }`}
                type="text"
                placeholder="Name"
                autoComplete="off"
                {...register('name', {
                  required: { value: true, message: 'Name is required' },
                  min: 2,
                  maxLength: 20,
                  pattern: {
                    value:
                      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/i,
                    message: 'This is an ERROR name',
                  },
                })}
              />
              {errors?.name && (
                <p className="errorMsg">{errors.name.message}</p>
              )}
              {dirtyFields.name && !errors.name && (
                <p className="correctMsg">This is a CORRECT name</p>
              )}
            </div>
            <div>
              <Calendar getDateOfBirth={getDateOfBirth} />
            </div>
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
              {/* background-color: antiquewhite; stroke: black; fill: none;
              border-radius: 50%; */}
              {showPassword ? (
                <svg
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-none stroke-primary-text-color hover:stroke-button-hover-color hover:bg-primary-text-color rounded-full"
                >
                  <use href={sprite + '#icon-eye'}></use>
                </svg>
              ) : (
                <svg
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="absolute w-[20px] h-[20px] top-[18px] right-[18px] fill-none stroke-primary-text-color hover:stroke-button-hover-color hover:bg-primary-text-color rounded-full"
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
              Sign Up
            </button>
            <Link className="sign-link-btn" to="/signin">
              Sign in
            </Link>
          </div>
        </form>
        <DevTool control={control} />
      </div>
    </div>
  );
};

export default SignUpForm;
