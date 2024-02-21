import { useForm } from 'react-hook-form';
import { signUpThunk } from '../../redux/auth/authOperations';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { selectAuthToken } from '../../redux/auth/authSelectors';
import { DevTool } from '@hookform/devtools';

const SignUpForm = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectAuthToken);
  const navigate = useNavigate();

  const {
    onBlur,
    register,
    handleSubmit,
    formState: { errors, dirtyFields },
    reset,
    control,
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = (data) => {
    dispatch(signUpThunk(data));

    if (token) navigate('/home');
    reset();
  };

  return (
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
            {errors?.name && <p className="errorMsg">{errors.name.message}</p>}
            {dirtyFields.name && !errors.name && (
              <p className="correctMsg">This is a CORRECT name</p>
            )}
          </div>
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
            Sign Up
          </button>
          <Link className="sign-link-btn" to="/signin">
            Sign in
          </Link>
        </div>
      </form>
      <DevTool control={control} />
    </div>
  );
};

export default SignUpForm;
