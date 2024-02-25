import { useForm } from 'react-hook-form';
import { signInThunk } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';
import { useState } from 'react';
import sprite from '../../assets/sprite.svg';

import { useTranslation } from 'react-i18next';
import '../../i18n';

const SignInForm = () => {
  const { t, i18n } = useTranslation();

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
      <h1 className="form-title">{t('title.SignInForm')}</h1>
      <div className="input-container">
        <div className="relative">
          <input
            className={`input-form ${errors?.email && 'error'} ${
              dirtyFields.email && !errors.email && 'correct'
            }`}
            type="email"
            placeholder={t('inputPlaceholder.SignInForm.email')}
            autoComplete="off"
            {...register('email', {
              required: `${t('inputPlaceholder.SignInForm.emailValid')}`,
              pattern: {
                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: `${t(
                  'inputPlaceholder.SignInForm.emailPatternError'
                )}`,
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
              <p className="correctMsg">
                {t('inputPlaceholder.SignInForm.emailPatternCorrect')}
              </p>
            </>
          )}
        </div>
        <div className="relative">
          <input
            className={`input-form ${errors?.password && 'error'} ${
              dirtyFields.password && !errors.password && 'correct'
            }`}
            type={showPassword ? 'text' : 'password'}
            placeholder={t('inputPlaceholder.SignInForm.password')}
            autoComplete="off"
            {...register('password', {
              required: `${t('inputPlaceholder.SignInForm.passwordValid')}`,
              minLength: {
                value: 6,
                message: `${t(
                  'inputPlaceholder.SignInForm.passwordPatternErrorLength'
                )}`,
              },
              pattern: {
                value: '/^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$/i',
                message: `${t(
                  'inputPlaceholder.SignInForm.passwordPatternError'
                )}`,
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
            <p className="correctMsg">
              {t('inputPlaceholder.SignInForm.passwordPatternCorrect')}
            </p>
          )}
        </div>
      </div>
      <div className="btn-container">
        <div className="flex ">
          <Link
            to="http://localhost:3000/api/auth/google"
            className="relative btn-google sign-google"
            type="submit"
          >
            <svg className="w-[28px] h-[28px] fill-none stroke-primary-text-color cursor-pointer  rounded-full">
              <use href={sprite + '#icon-google'}></use>
            </svg>
          </Link>
          <button className="btn-up sign-btn" type="submit">
            {t('button.SignInForm.SignIn')}
          </button>
        </div>
        <Link className="sign-link-btn" to="/signup">
          {t('link.SignInForm.SignUp')}
        </Link>
      </div>
    </form>
  );
};

export default SignInForm;
