import { useForm } from 'react-hook-form';
import { signUpThunk } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuthToken } from '../../redux/auth/authSelectors';

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
    <div className="sign-in-container">
      <form
        className="flex flex-col w-[335px] gap-[14px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className=" text-welcome-text-color text-[28px]  mb-[28px]">
          Sign Up
        </h1>
        <input
          className="input-form"
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

        <input
          className="input-form"
          onBlur={onBlur}
          type="text"
          placeholder="dd/mm/yyyy"
          autoComplete="off"
          {...register('dateOfBirth', {
            required: {
              value: true,
              message: 'This is an ERROR date of birth',
            },
            min: 0,
            pattern:
              '/^(0[1-9]|[1-2][0-9]|3[0-1])(\\/|-)(0[1-9]|1[0-2])(\\/|-)d{4}$/i',
          })}
        />
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
          Sign Up
        </button>

        <Link className="sign-link-btn" to="/signin">
          Sign In
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
