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
    <form
      className="items-center flex flex-col   "
      onSubmit={handleSubmit(onSubmit)}
    >
      <label className=" items-center flex flex-col  ">
        <input
          className="w-[20px] h-[2px] opacity-0"
          type="file"
          {...register('avatar')}
          onChange={handleUploadedFile}
        />

        <div className=" flex flex-col items-center pb-[34px] md:pb-[65px] cursor-pointer ">
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
      <div className="flex justify-between w-[285px] px-[24px] py-[18px] md:py-[14px] md:w-[400px] rounded-[200px] border-[1px]  border-grey-text-color hover:border-primary-text-color focus:border-primary-text-color  transition">
        <input
          className="bg-transparent text-primary-text-color text-[16px] leading-[1.12] font-semibold  transition-colors focus:outline-none"
          {...register('name')}
          type="text"
          placeholder={t('inputPlaceholder.SignUpForm.name')}
          autoComplete="off"
          onChange={handleChange}
          value={userName.name}
        />
        <svg className="stroke-primary-text-color w-[16px] h-[16px] md:w-[20px] md:h-[20px] ">
          <use href={sprite + '#icon-pancil'}></use>
        </svg>
      </div>

      <button className="w-[285px] md:w-full sm:mt-[18px] md:mt-[25px]  text-center py-[18px] rounded-[200px] bg-primary-text-color border-[1px]  border-border-color text-primary-text-button-color text-[16px] leading-[1.12] font-semibold transition shadow-lg hover:shadow-primary-text-color/50 md:py-[18px] ">
        {t('button.UserLogo.Save')}
      </button>
    </form>
  );
};

export default UserLogo;
