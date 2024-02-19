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
    <div className="sign-in-container">
      <form
        className="flex flex-col w-[335px] gap-[14px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className=" text-welcome-text-color text-[28px]  mb-[28px]">
          Sign In
        </h1>
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
        <button className="sign-btn" type="submit">
          Sign In
        </button>
        <Link className="sign-link-btn" to="/signup">
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default SignInForm;
