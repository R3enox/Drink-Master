import { useForm } from 'react-hook-form';
import { signInThunk } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuthIsLoading } from '../../redux/auth/authSelectors';
import Loader from '../Loader/Loader';

const SignInForm = () => {
  const { isLoading } = useSelector(selectAuthIsLoading);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  return (
    <div className="form-sign-in-bg-container">
      {isLoading && <Loader />}
      <div className="form-sign-in-container">
        <form
          className="flex flex-col w-[335px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="form-title">Sign In</h1>
          <div className="input-container">
            <div>
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
                <p className="errorMsg">{errors.email.message}</p>
              )}
              {dirtyFields.email && !errors.email && (
                <p className="correctMsg">This is a CORRECT email</p>
              )}
            </div>
            <div>
              <input
                className={`input-form ${errors?.password && 'error'} ${
                  dirtyFields.password && !errors.password && 'correct'
                }`}
                type="password"
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
              {errors?.password && (
                <p className="errorMsg">{errors.password.message}</p>
              )}
              {dirtyFields.password && !errors.password && (
                <p className="correctMsg">This is a CORRECT password</p>
              )}
            </div>
          </div>
          <div className="btn-container">
            <button className="sign-btn" type="submit">
              Sign In
            </button>
            <Link className="sign-link-btn" to="/signup">
              Sign Up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignInForm;
