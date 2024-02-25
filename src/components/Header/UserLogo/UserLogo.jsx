import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { useDispatch, useSelector } from 'react-redux';
import { selectAuthUser} from '../../../redux/auth/authSelectors';
import sprite from '../../../assets/sprite.svg';
import { updateUserThunk } from '../../../redux/auth/authOperations';


// import "./styles.css"
import avatar from "../../../assets/img/header/user.png"

const UserLogo = ({closeFnc}) => {
  const user = useSelector(selectAuthUser);
  
 const dispatch = useDispatch();
 

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
     dispatch(updateUserThunk(formData));
   
    
  };

  const { register, handleSubmit } = useForm();

  return (
    <>
      <form
        className="items-center flex flex-col   "
        // onSubmit={handleSubmit(onSubmit)}
        // onClick={closeFnc}
      >
        <label className=" items-center flex flex-col  ">
          <input
            className="w-[20px] h-[2px] opacity-0"
            type="file"
            {...register('avatar', { required: true })}
            onChange={handleUploadedFile}
          />

          <div className=" flex flex-col items-center pb-[34px] md:pb-[65px]">
            {/* <img
              src={preview}
              srcSet={`${user.avatarURL}`}
              alt="avatar"
              width={44}
              height={44}
              className="rounded-full sm:w-[32px] sm:h-[32px]  md:w-[44px] md:h-[44px] lg:w-[39px] lg:h-[39px]"
            /> */}
            <img
              className="w-[80px] h-[80px] rounded-full   "
              src={preview}
              alt="avatar"
              srcSet={`${avatar}`}
            />

            <svg className="stroke-primary-text-color sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px] absolute top-[120px] rounded-[10px] bg-grey-text-color">
              <use href={sprite + '#icon-plus'}></use>
            </svg>
          </div>
        </label>
        <input
          className="w-[285px] pl-[24px] md:w-[400px]   py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color transition-colors md:text-[17px] md:py-[18px] md:leading-[1.56]"
          {...register('name', { required: true })}
          type="text"
          placeholder="name"
          autoComplete="off"
          onChange={handleChange}
          value={userName.name}
        />
        <svg className="fill-primary-text-color w-[17px] h-[17px] absolute sm:top-[185px] md:top-[220px] sm:right-[60px] md:right-[80px]">
          <use href={sprite + '#icon-pancil'}></use>
        </svg>

        <button
          className="w-[285px] md:w-full sm:mt-[18px] md:mt-[25px]  text-center py-[18px] rounded-[200px] bg-transparent border-[1px]  border-border-color text-primary-text-color text-[16px] leading-[1.12] font-semibold hover:bg-primary-text-color hover:text-primary-text-button-color transition-colors md:text-[17px] md:py-[18px] md:leading-[1.56]"
          type="submit"
          // onClick={closeFnc}
          onClick={() => {
            onSubmit();
            closeFnc;
          }}
        >
          Save changes
        </button>
      </form>
    </>
  );
};

export default UserLogo;
