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
    <div className="form-sign-in-bg-container">
      {isLoading && <Loader />}
      {!isLoading && (
        <div className="form-sign-in-container">
          <form
            className="flex flex-col w-[335px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="form-title">Sign In</h1>
            <div className="input-container">
              <input
                className="input-form"
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
                className="input-form"
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
      )}
    </div>
  );
};

export default SignInForm;
