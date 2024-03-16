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
  const currentLang = i18n.language;

  const { categories, glasses } = useFilters();
  const [preview, setPreview] = useState();
  const [age, setAge] = useState(0);

  const categoriesOptions = useMemo(
    () => createOptionsFromArrOfStr(categories ?? [], t, 'categories'),
    [categories, t]
  );

  const glassesOptions = useMemo(
    () => createOptionsFromArrOfStr(glasses ?? [], t, 'GlassType'),
    [glasses, t]
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
           bg-primary-text-button-color dark:bg-opacity-50
           md:w-[320px]  lg:w-[400px] lg:h-[400px]"
          >
            {preview === undefined ? (
              <div className="flex flex-col pointer-events-none items-center ">
                <button
                  tabIndex="-1"
                  type="button"
                  className="addPhotoButton flex justify-center items-center  mb-[18px] w-[50px] h-[50px] bg-primary-text-color rounded-[6px] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
                >
                  <svg className="svgPhotoAddDrink stroke-primary-text-button-color w-[28px] h-[28px] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]">
                    <use href={spite + '#icon-plus'}></use>
                  </svg>
                </button>
                <p className="font-medium text-center leading-[125%] text-primary-text-color">
                  {t('serviceText.DrinkPageHero')}
                </p>
              </div>
            ) : (
              <img
                src={preview}
                className="block  w-[335px] h-[320px] rounded-[8px] md:w-[320px] lg:w-[400px] lg:h-[400px]"
              />
            )}
          </div>
        </label>
      </div>
      <div className="flex flex-col gap-[31px] mb-10 lg:gap-[40px]">
        <input
          type="text"
          name="drink"
          className="block pb-[14px] outline-none hover:placeholder-button-hover-color/70 dark:hover:placeholder-primary-text-color   bg-transparent  w-[335px] h-[34px] border-b border-border-color-search dark:border-grey-text-color  focus:outline-none focus:border-border-color-search/100 dark:focus:border-primary-text-color hover:border-border-color-search/100 dark:hover:border-primary-text-color placeholder-button-hover-color/50 dark:placeholder-grey-text-color placeholder-font-normal placeholder-text-sm transition-colors ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] md:w-[352px] md:h-[41px] md:placeholder-text-base md:pb-[18px] lg:w-[393px]"
          placeholder={t('inputPlaceholder.DrinkPageHero.itemTitle')}
          required
          autoComplete="off"
        />
        <input
          type="text"
          name="description"
          className="block pb-[14px] outline-none hover:placeholder-button-hover-color/70 dark:hover:placeholder-primary-text-color   bg-transparent w-[335px] h-[34px] border-b border-hover-border-color-search dark:border-grey-text-color  focus:outline-none  focus:border-border-color-search/100 dark:focus:border-primary-text-color hover:border-border-color-search/100 dark:hover:border-primary-text-color placeholder-button-hover-color/50 dark:placeholder-grey-text-color placeholder-font-normal placeholder-text-sm transition-colors ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] md:w-[352px] md:h-[41px] md:placeholder-text-base md:pb-[18px] lg:w-[393px]"
          placeholder={t('inputPlaceholder.DrinkPageHero.recipeDescr')}
          required
          autoComplete="off"
        />
        <div className="relative">
          <label
            htmlFor="selectCategory"
            className="absolute top-0 left-0 text-hover-border-color-search dark:text-grey-text-color font-normal text-base tracking-[-0.02em] leading-[1.2]  ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]"
          >
            {t('label.DrinkPageHero.Category')}
          </label>
          <Select
            key={`${currentLang}cat`}
            id="selectCategory"
            classNamePrefix="custom_select"
            options={categoriesOptions}
            name="category"
            defaultValue={{
              value: categoriesOptions[0].value,
              label: t(`categories.${categoriesOptions[0].value}`),
            }}
            isRequired={true}
          />
        </div>
        <div className="relative">
          <label
            htmlFor="selectGlass"
            className="absolute top-0 left-0 text-hover-border-color-search dark:text-grey-text-color font-normal text-base tracking-[-0.02em] leading-[1.2]"
          >
            {t('label.DrinkPageHero.Glass')}
          </label>
          <Select
            key={`${currentLang}gls`}
            id="selectGlass"
            classNamePrefix="custom_select"
            options={glassesOptions}
            name="glass"
            defaultValue={{
              value: glassesOptions[0].value,
              label: t(`GlassType.${glassesOptions[0].value}`),
            }}
            isRequired={true}
          />
        </div>

        <div className="mb-20 flex gap-x-[95px] md:gap-x-[107px]  md:mb-0">
          {age >= 18 ? (
            <>
              <label className="flex items-center gap-x-[8px] cursor-pointer ">
                <div className="relative  w-[20px] h-[20px]">
                  <input
                    type="radio"
                    name="alcoholic"
                    value="Alcoholic"
                    required
                    className="peer sr-only"
                    defaultChecked
                  />
                  <div className=" absolute left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2  w-2.5 h-2.5 bg-button-hover-color dark:bg-primary-text-color rounded-[5px] opacity-0 peer-checked:opacity-100"></div>
                  <div className="absolute left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 border-hover-border-color-search dark:border-grey-text-color cursor-pointer rounded-[50%] border-[1.30px] peer-checked:border-button-hover-color dark:peer-checked:border-primary-text-color "></div>
                  <p className="ml-[22px] text-hover-border-color-search dark:text-grey-text-color text-sm peer-checked:text-button-hover-color dark:peer-checked:text-primary-text-color md:text-base whitespace-nowrap">
                    {t('cocktailType.alco')}
                  </p>
                </div>
              </label>
              <label className="flex items-center gap-x-[8px] cursor-pointer">
                <div className="relative  w-[20px] h-[20px]">
                  <input
                    type="radio"
                    name="alcoholic"
                    value="Non alcoholic"
                    required
                    className="peer sr-only"
                  />
                  <div className="absolute  left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 bg-button-hover-color dark:bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"></div>
                  <div className="absolute left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2 w-4 h-4  border-hover-border-color-search dark:border-grey-text-color cursor-pointer rounded-[50%] border-[1.30px] peer-checked:border-button-hover-color dark:peer-checked:border-primary-text-color  "></div>
                  <p className="ml-[22px] text-hover-border-color-search dark:text-grey-text-color peer-checked:text-button-hover-color dark:peer-checked:text-primary-text-color whitespace-nowrap text-sm md:text-base ">
                    {t('cocktailType.non')}
                  </p>
                </div>
              </label>
            </>
          ) : (
            <>
              <label
                className={`relative flex items-center gap-x-[8px]  ${
                  age >= 18 ? 'cursor-pointer' : ''
                } `}
              >
                <div className="relative  w-[20px] h-[20px]">
                  <input
                    type="radio"
                    name="alcoholic"
                    value="Alcoholic"
                    required
                    className="peer sr-only"
                    disabled={true}
                  />
                  <div
                    className={` w-4 h-4 p-0.5 border-hover-border-color-search/20 dark:border-grey-text-color/20 
                ${
                  age >= 18 ? 'cursor-pointer' : ''
                }  rounded-[50%] border-[1.30px]  `}
                  ></div>
                  <div className=" absolute  left-[3.5%] w-2.5 h-2.5 bg-button-hover-color dark:bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"></div>
                  <p className=" ml-[22px] text-hover-border-color-search/20 dark:text-grey-text-color/20 whitespace-nowrap">
                    {t('cocktailType.alco')}
                  </p>
                </div>
              </label>
              <label className="relative flex items-center gap-x-[8px]">
                <div className="relative  w-[20px] h-[20px]">
                  <input
                    type="radio"
                    name="alcoholic"
                    value="Non alcoholic"
                    required
                    className="peer sr-only"
                    defaultChecked
                  />
                  <div className=" absolute w-4 h-4 left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2  border-hover-border-color-search dark:border-grey-text-color cursor-pointer rounded-[50%] border-[1.30px] peer-checked:border-button-hover-color dark:peer-checked:border-primary-text-color"></div>
                  <div className=" absolute  left-1/2 top-1/2  transform -translate-x-1/2 -translate-y-1/2  w-2.5 h-2.5 bg-button-hover-color dark:bg-primary-text-color rounded-[50%] opacity-0 peer-checked:opacity-100"></div>
                  <p className=" ml-[22px] text-hover-border-color-search dark:text-grey-text-color peer-checked:text-button-hover-color dark:peer-checked:text-primary-text-color whitespace-nowrap">
                    {t('cocktailType.non')}
                  </p>
                </div>
              </label>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
