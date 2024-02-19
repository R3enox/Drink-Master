import spite from '../../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { selectAuthUser } from '../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { userAge } from '../userAge';

const optionsCategory = [
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Shake', label: 'Shake' },
  { value: 'Other/Unknown', label: 'Other/Unknown' },
  { value: 'Cocoa', label: 'Cocoa' },
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Shake', label: 'Shake' },
  { value: 'Other/Unknown', label: 'Other/Unknown' },
  { value: 'Cocoa', label: 'Cocoa' },
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Shake', label: 'Shake' },
  { value: 'Other/Unknown', label: 'Other/Unknown' },
  { value: 'Cocoa', label: 'Cocoa' },
];
const optionsGlass = [
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Shake', label: 'Shake' },
  { value: 'Other/Unknown', label: 'Other/Unknown' },
  { value: 'Cocoa', label: 'Cocoa' },
];

export const DrinkPageHero = () => {
  const [preview, setPreview] = useState();
  const [age, setAge] = useState(0);

  const user = useSelector(selectAuthUser);

  useEffect(() => {
    if (user) {
      const dateOfBirth = userAge(user.dateOfBirth);
      setAge(dateOfBirth);
    }
  }, [user]);

  const handleUploadedFile = (event) => {
    const file = event.target.files[0];

    const urlImage = URL.createObjectURL(file);

    setPreview(urlImage);
  };

  return (
    <>
      <div className="mb-10">
        <input
          id="fileInput"
          type="file"
          name="drinkThumb"
          required
          className="inputFile sr-only mt-[280px] ml-[170px]"
          onChange={handleUploadedFile}
        />
        <label htmlFor="fileInput" className="cursor-pointer">
          <div className="flex justify-center items-center w-[335px] h-[320px]  rounded-lg bg-primary-text-button-color bg-opacity-50 hover:bg-filter-scroll-text ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] ">
            {preview === undefined ? (
              <div className="flex flex-col pointer-events-none items-center w-20 h-[88px] ">
                <button
                  tabIndex="-1"
                  type="button"
                  className="flex justify-center items-center  mb-[18px] w-[50px] h-[50px] bg-primary-text-color rounded-[6px]"
                >
                  <svg className="stroke-primary-text-button-color w-[28px] h-[28px] ">
                    <use href={spite + '#icon-plus'}></use>
                  </svg>
                </button>
                <p className="font-medium text-base leading-[125%]">
                  Add image
                </p>
              </div>
            ) : (
              <img
                src={preview}
                className="block  w-[335px] h-[320px] rounded-[8px] "
              />
            )}
          </div>
        </label>
      </div>
      <div className="flex flex-col gap-[31px] mb-10">
        <input
          type="text"
          name="drink"
          placeholder="Enter item title"
          required
          className="block pb-[14px]  bg-transparent w-[335px]  h-[34px] border-b border-grey-text-color focus:outline-none focus:border-primary-text-color hover:border-primary-text-color placeholder-grey-text-color placeholder-font-normal placeholder-text-sm ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] "
        />
        <input
          type="text"
          name="description"
          placeholder="Enter about recipe"
          className="block pb-[14px]  bg-transparent w-[335px] h-[34px] border-b border-grey-text-color  focus:outline-none  focus:border-primary-text-color hover:border-primary-text-color placeholder-grey-text-color placeholder-font-normal placeholder-text-sm ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] "
          required
        />
        <div className="relative">
          <label
            htmlFor="selectCategory"
            className="absolute top-0 left-0 text-grey-text-color font-normal text-base tracking-[-0.02em] leading-[1.2]"
          >
            Category
          </label>
          <Select
            id="selectCategory"
            classNamePrefix="custom_select"
            options={optionsCategory}
            name="category"
            defaultValue={optionsCategory[0]}
            isRequired={true}
          />
        </div>
        <div className="relative">
          <label
            htmlFor="selectGlass"
            className="absolute top-0 left-0 text-grey-text-color font-normal text-base tracking-[-0.02em] leading-[1.2]"
          >
            Glass
          </label>
          <Select
            id="selectGlass"
            classNamePrefix="custom_select"
            options={optionsGlass}
            name="glass"
            defaultValue={optionsCategory[0]}
            isRequired={true}
          />
        </div>
      </div>
      <div className="mb-20 flex gap-x-3.5">
        {age >= 18 ? (
          <>
            <label className="relative flex items-center gap-x-1 cursor-pointer ">
              <input
                type="radio"
                name="alcoholic"
                value="Alcoholic"
                required
                className="peer sr-only"
                defaultChecked
              />
              <div className=" w-4 h-4 p-0.5 border-grey-text-color cursor-pointer rounded-[50%] border-[1.30px] peer-checked:border-primary-text-color "></div>
              <div className=" absolute  left-[3.6%] top-[28%;] w-2.5 h-2.5 bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"></div>
              <span className="text-grey-text-color  peer-checked:text-primary-text-color">
                Alcoholic
              </span>
            </label>
            <label className="relative text-grey-text-color  flex items-center gap-x-1 cursor-pointer">
              <input
                type="radio"
                name="alcoholic"
                value="Non-alcoholic"
                required
                className="peer sr-only"
              />
              <div className=" w-4 h-4 p-0.5 border-grey-text-color cursor-pointer rounded-[50%] border-[1.30px] peer-checked:border-primary-text-color "></div>
              <div className=" absolute  left-[2.8%]  top-[28%;] w-2.5 h-2.5 bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"></div>
              <span className="text-grey-text-color  peer-checked:text-primary-text-color">
                Non-alcoholic
              </span>
            </label>
          </>
        ) : (
          <>
            <label
              className={`relative flex items-center gap-x-1  ${
                age >= 18 ? 'cursor-pointer' : ''
              } `}
            >
              <input
                type="radio"
                name="alcoholic"
                value="Alcoholic"
                required
                className="peer sr-only"
                disabled={true}
              />
              <div
                className={` w-4 h-4 p-0.5 border-grey-text-color 
                ${
                  age >= 18 ? 'cursor-pointer' : ''
                }  rounded-[50%] border-[1.30px] peer-checked:border-primary-text-color `}
              ></div>
              <div className=" absolute  left-[3.5%] w-2.5 h-2.5 bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"></div>
              <span className="text-grey-text-color  peer-checked:text-primary-text-color">
                Alcoholic
              </span>
            </label>
            <label className="relative text-grey-text-color  flex items-center gap-x-1 cursor-pointer">
              <input
                type="radio"
                name="alcoholic"
                value="Non-alcoholic"
                required
                className="peer sr-only"
                defaultChecked
              />
              <div className=" w-4 h-4 p-0.5 border-grey-text-color cursor-pointer rounded-[50%] border-[1.30px] peer-checked:border-primary-text-color "></div>
              <div className=" absolute  left-[2.8%] w-2.5 h-2.5 bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"></div>
              <span className="text-grey-text-color  peer-checked:text-primary-text-color">
                Non-alcoholic
              </span>
            </label>
          </>
        )}
      </div>
    </>
  );
};
