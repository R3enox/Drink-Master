import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/authSelectors';
import sprite from '../../../assets/sprite.svg';
import { updateUserThunk } from '../../../redux/auth/authOperations';
import { useTranslation } from 'react-i18next';
import '../../../i18n';

const UserLogo = ({ closeFnc }) => {
  const { t, i18n } = useTranslation();
  const user = useSelector(selectAuthUser);

  const dispatch = useDispatch();

  const [preview, setPreview] = useState(null);
  const [userName, setUserName] = useState({ name: user.name });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserName({ ...userName, [name]: value });
  };

  const handleUploadedFile = (event) => {
    const file = event.target.files[0];

    const urlImage = URL.createObjectURL(file);

    setPreview(urlImage);
  };

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append('avatar', data.avatar[0]);
    formData.append('name', data.name);
    await dispatch(updateUserThunk(formData));
    closeFnc();
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <form
        className="items-center flex flex-col   "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className=" items-center flex flex-col  ">
          <input
            className="w-[20px] h-[2px] opacity-0"
            type="file"
            {...register('avatar', { required: true })}
            onChange={handleUploadedFile}
          />

          <div className=" flex flex-col items-center pb-[34px] md:pb-[65px]">
            <img
              src={preview}
              srcSet={preview ?? user.avatarURL}
              alt="avatar"
              className="rounded-full sm:w-[80px] sm:h-[80px]  md:w-[100px] md:h-[100px] "
            />
            <svg className=" hover:bg-primary-text-color hover:stroke-primary-text-button-color stroke-primary-text-color sm:w-[28px] h-[28px] md:w-[32px] md:h-[32px] absolute top-[120px] md:top-[140px] rounded-full bg-icon-plus">
              <use href={sprite + '#icon-plus'}></use>
            </svg>
          </div>
        </label>
        <input
          className="w-[285px] pl-[24px] md:w-[400px]   py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color transition-colors  md:py-[18px] "
          {...register('name', { required: true })}
          type="text"
          placeholder={t('inputPlaceholder.SignUpForm.name')}
          autoComplete="off"
          onChange={handleChange}
          value={userName.name}
        />
        <svg className="fill-primary-text-color w-[17px] h-[17px] absolute sm:top-[185px] md:top-[240px] sm:right-[60px] md:right-[80px] rounded-[300px]">
          <use href={sprite + '#icon-pancil'}></use>
        </svg>

        <button
          className="w-[285px] md:w-full sm:mt-[18px] md:mt-[25px]  text-center py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color transition-colors md:text-[17px] md:py-[18px] md:leading-[1.56]"
        >
          {t('button.UserLogo.Save')}
        </button>
      </form>
    </>
  );
};

export default UserLogo;
