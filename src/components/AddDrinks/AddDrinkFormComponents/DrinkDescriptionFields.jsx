import spite from '../../../assets/sprite.svg';
import { useEffect, useMemo, useState } from 'react';
import Select from 'react-select';
import { selectAuthUser } from '../../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
import { userAge } from '../../../helpers/userAge';
import { createOptionsFromArrOfStr } from '../../../helpers/createCollectionOptions';
import { useFilters } from '../../../hooks/useFilters';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const DrinkPageHero = () => {
  const { t, i18n } = useTranslation();

  const { categories, glasses } = useFilters();
  const [preview, setPreview] = useState();
  const [age, setAge] = useState(0);

  const categoriesOptions = useMemo(
    () => createOptionsFromArrOfStr(categories ?? []),
    [categories]
  );

  const glassesOptions = useMemo(
    () => createOptionsFromArrOfStr(glasses ?? []),
    [glasses]
  );

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
    <div className="md:flex md:gap-[32px] md:mb-20">
      <div className="mb-10 md:mb-0">
        <input
          id="fileInput"
          type="file"
          name="drinkThumb"
          required
          className="inputFile sr-only mt-[280px] ml-[170px]"
          onChange={handleUploadedFile}
        />
        <label htmlFor="fileInput" className="cursor-pointer">
          <div
            className="containerPhoto flex justify-center items-center w-[335px] h-[320px]  rounded-lg
           bg-primary-text-button-color bg-opacity-50
           md:w-[320px]  lg:w-[400px] lg:h-[400px]"
          >
            {preview === undefined ? (
              <div className="flex flex-col pointer-events-none items-center w-20 h-[88px] ">
                <button
                  tabIndex="-1"
                  type="button"
                  className="addPhotoButton flex justify-center items-center  mb-[18px] w-[50px] h-[50px] bg-primary-text-color rounded-[6px] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
                >
                  <svg className="svgPhotoAddDrink stroke-primary-text-button-color w-[28px] h-[28px] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]">
                    <use href={spite + '#icon-plus'}></use>
                  </svg>
                </button>
                <p className="font-medium text-center leading-[125%]">
                  {t('serviceText.DrinkPageHero')}
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
      <div className="flex flex-col gap-[31px] mb-10 lg:gap-[40px]">
        <input
          type="text"
          name="drink"
          placeholder="Enter item title"
          required
          className="block pb-[14px] outline-none hover:placeholder-primary-text-color   bg-transparent w-[335px] h-[34px] border-b border-grey-text-color  focus:outline-none  focus:border-primary-text-color hover:border-primary-text-color placeholder-grey-text-color placeholder-font-normal placeholder-text-sm transition-colors ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] md:w-[352px] md:h-[41px] md:placeholder-text-base md:pb-[18px] lg:w-[393px]"
        />
        <input
          type="text"
          name="description"
          placeholder="Enter about recipe"
          className="block pb-[14px] outline-none hover:placeholder-primary-text-color   bg-transparent w-[335px] h-[34px] border-b border-grey-text-color  focus:outline-none  focus:border-primary-text-color hover:border-primary-text-color placeholder-grey-text-color placeholder-font-normal placeholder-text-sm transition-colors ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] md:w-[352px] md:h-[41px] md:placeholder-text-base md:pb-[18px] lg:w-[393px]"
          required
        />
        <div className="relative">
          <label
            htmlFor="selectCategory"
            className="absolute top-0 left-0 hover:text-primary-text-color text-grey-text-color font-normal text-base tracking-[-0.02em] leading-[1.2]  ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
          >
            {t('inputPlaceholder.DrinkPageHero.recipeDescr')}
          </label>
          <Select
            id="selectCategory"
            classNamePrefix="custom_select"
            options={categoriesOptions}
            name="category"
            defaultValue={categoriesOptions[0]}
            isRequired={true}
          />
        </div>
        <div className="relative">
          <label
            htmlFor="selectGlass"
            className="absolute top-0 left-0 text-grey-text-color font-normal text-base tracking-[-0.02em] leading-[1.2]"
          >
            {t('label.DrinkPageHero.Glass')}
          </label>
          <Select
            id="selectGlass"
            classNamePrefix="custom_select"
            options={glassesOptions}
            name="glass"
            defaultValue={glassesOptions[0]}
            isRequired={true}
          />
        </div>

        <div className="mb-20 flex gap-x-3.5  md:mb-0">
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
                <div className="relative w-4 h-4 p-0.5 border-grey-text-color cursor-pointer rounded-[10px] border-[1.30px] peer-checked:border-primary-text-color ">
                  <div className=" absolute  left-[50%]  top-[50%]  w-2.5 h-2.5 bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"></div>
                </div>
                <span className="text-grey-text-color text-sm peer-checked:text-primary-text-color md:text-base">
                  {t('cocktailType.alco')}
                </span>
              </label>
              <label className="text-grey-text-color  flex items-center gap-x-1 cursor-pointer">
                <input
                  type="radio"
                  name="alcoholic"
                  value="Non-alcoholic"
                  required
                  className="peer sr-only"
                />
                <div className="relative w-4 h-4 p-0.5 border-grey-text-color cursor-pointer rounded-[10px] border-[1.30px] peer-checked:border-primary-text-color ">
                  <div className=" absolute  left-[50%]  top-[50%] w-2.5 h-2.5 bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"></div>
                </div>

                <span className="text-grey-text-color  peer-checked:text-primary-text-color text-sm md:text-base ">
                  {t('cocktailType.non')}
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
                  {t('cocktailType.alco')}
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
                  {t('cocktailType.non')}
                </span>
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
