import sprite from '../../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import { AddDrinkTitle } from './AddDrinkTitle';
import Select from 'react-select';
import { nanoid } from 'nanoid';

import { useTranslation } from 'react-i18next';
import '../../../i18n';

export const DrinkIngredientsFields = ({ ingredientsOptions }) => {
  const { t } = useTranslation();

  const [ingredientsCount, setIngredientsCount] = useState(3);
  const [ingredientInputs, setIngredientInputs] = useState([]);

  useEffect(() => {
    if (ingredientInputs.length === 0) {
      newIngredient(ingredientsCount);
      return;
    }
  }, []);

  const newIngredient = (ingredientsCount) => {
    const newIngredientInputs = [];
    for (let i = 0; i < ingredientsCount; i++) {
      const id = nanoid();
      newIngredientInputs.push(
        <li key={id} className="flex items-center mb-3.5 gap-x-2">
          <Select
            className="flex-initial"
            name="ingredientId"
            options={ingredientsOptions}
            classNamePrefix="ingredientsSelect"
            placeholder={ingredientsOptions[i].label}
            isRequired={true}
          />
          <label>
            <input
              type="text"
              placeholder="1  cl"
              name="measure"
              required
              className="text-primary-text-color placeholder-primary-text-color bg-transparent w-[100px] md:w-[150px]  h-[50px] md:h-[56px] border-grey-text-color border-[1px] rounded-[200px] pl-[18px] md:pl-[24px] hover:border-primary-text-color focus:border-primary-text-color outline-none ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]  "
            />
          </label>
          <button
            className="md:ml-auto "
            type="button"
            id={id}
            onClick={() => handleDelete(id)}
          >
            <svg className=" stroke-primary-text-color w-[18px] md:w-[20px] h-[18px] md:h-[20px]  hover:stroke-[#848080] focus:stroke-[#848080] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] ">
              <use href={`${sprite}#icon-cross`} />
            </svg>
          </button>
        </li>
      );
    }
    setIngredientInputs(newIngredientInputs);
  };

  const handleInc = () => {
    if (ingredientsOptions.length <= ingredientsCount) {
      return;
    }
    const newCount = ingredientsCount + 1;
    setIngredientsCount(newCount);
    let randomIndex = Math.floor(Math.random() * ingredientsOptions.length);
    const id = nanoid();
    ingredientInputs.push(
      <li key={id} className="flex items-center mb-3.5 gap-x-2">
        <Select
          className="flex-initial"
          name="ingredientId"
          options={ingredientsOptions}
          classNamePrefix="ingredientsSelect"
          placeholder={ingredientsOptions[randomIndex].label}
          isRequired={true}
        />
        <label>
          <input
            type="text"
            placeholder="1  cl"
            name="measure"
            required
            className="text-primary-text-color placeholder-primary-text-color bg-transparent w-[100px] md:w-[150px]  h-[50px] md:h-[56px] border-grey-text-color border-[1px] rounded-[200px] pl-[18px] md:pl-[24px] hover:border-primary-text-color focus:border-primary-text-color outline-none ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms]  "
          />
        </label>
        <button
          className="md:ml-auto "
          type="button"
          id={id}
          onClick={() => handleDelete(id)}
        >
          <svg className=" stroke-primary-text-color w-[18px] md:w-[20px] h-[18px] md:h-[20px]  hover:stroke-[#848080] focus:stroke-[#848080] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] ">
            <use href={`${sprite}#icon-cross`} />
          </svg>
        </button>
      </li>
    );
  };

  const handleDec = () => {
    if (ingredientsCount <= 3) {
      return;
    }
    const newCount = ingredientsCount - 1;
    setIngredientsCount(newCount);
    ingredientInputs.pop();
  };

  const handleDelete = (id) => {
    setIngredientInputs((prevInputs) =>
      prevInputs.filter((input) => input.key !== id)
    );
    setIngredientsCount((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <div className="flex justify-between lg:w-[540px]">
        <AddDrinkTitle text={t('title2.AddDrink')} className="inline-block" />
        <div
          id="counter"
          className="w-[104px] h-[38px] md:w-[114px] md:h-[44px]  flex justify-around items-center border-solid border-grey-text-color border-[1px] rounded-3xl"
        >
          <button type="button" data-action="decrement" onClick={handleDec}>
            <svg width="16" height="16" className="stroke-primary-text-color ">
              <use href={`${sprite}#icon-minus`} />
            </svg>
          </button>
          <span id="value" className="flex text-center">
            {ingredientsCount}
          </span>
          <button type="button" data-action="increment" onClick={handleInc}>
            <svg width="16" height="16" className="stroke-primary-text-color">
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </button>
        </div>
      </div>
      <ul className="mb-20 lg:w-[540px]">{ingredientInputs}</ul>
    </>
  );
};
