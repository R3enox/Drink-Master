import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useUploadUserMutation } from '../../../redux/auth/usersOperations';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '../../../redux/auth/authSelectors';
import sprite from '../../../assets/sprite.svg';
// import "./styles.css"
// import avatar from "../../../assets/img/header/index"

const UserLogo = () => {
  const user = useSelector(selectAuthUser);

  const [uploadUser] = useUploadUserMutation();

  const [preview, setPreview] = useState();
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

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('avatar', data.avatar[0]);
    formData.append('name', data.name);
    console.log(data.avatar[0]);
    console.log(formData);
    return uploadUser(formData);
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <form
        className=" items-center flex flex-col   "
        onSubmit={handleSubmit(onSubmit)}
      >
        <label className=" ">
          <input
            className=""
            type="file"
            {...register('avatar', { required: true })}
            onChange={handleUploadedFile}
          />

          <div className="w-[200px] flex flex-col">
            <img
              className=" rounded-xl md:mb-[80px] md:w-[704px] md:object-cover lg:w-[400px] lg:mb-[100px] "
              src={preview}
              alt="avatar"
              //  srcSet={`${avatar}`}
            />

            <svg className="stroke-primary-text-color sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
              <use href={sprite + '#icon-plus'}></use>
            </svg>
          </div>
        </label>
        <input
          className="pl-[24px] md:w-[400px] mt-[18px] md:mt-[25px] w-full  py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color transition-colors md:text-[17px] md:py-[18px] md:leading-[1.56]"
          {...register('name', { required: true })}
          type="text"
          placeholder="name"
          autoComplete="off"
          onChange={handleChange}
          value={userName.name}
        />
        {/* <svg className="fill-primary-text-color w-[17px] h-[17px] ">
          <use href={sprite + '#icon-pancil'}></use>
        </svg> */}

        <button
          className="  mt-[18px] md:mt-[25px] w-full text-center py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color transition-colors md:text-[17px] md:py-[18px] md:leading-[1.56]"
          type="submit"
          onSubmit={handleSubmit(onSubmit)}
        >
          Save changes
        </button>
      </form>
    </>
  );
};

export default UserLogo;
