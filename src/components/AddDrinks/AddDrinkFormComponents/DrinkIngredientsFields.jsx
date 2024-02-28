import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { nanoid } from 'nanoid';

import { DrinkIngrediendFieldItem } from './DrinkIngrediendFieldItem';
import { AddDrinkTitle } from './AddDrinkTitle';
import { setInitialIngredientOptions } from 'helpers/createCollectionOptions';
import sprite from 'assets/sprite.svg';
import '../../../i18n';

export const DrinkIngredientsFields = ({ ingredientsOptions }) => {
  const [selectedIngredientOptions, setSelectedIngredientOptions] = useState(
    () => setInitialIngredientOptions(ingredientsOptions, 3)
  );
  const { t } = useTranslation();

  const filteredOptions = ingredientsOptions.filter((option) =>
    selectedIngredientOptions.every(
      ({ value, hasPlaceholder }) => hasPlaceholder || option.value !== value
    )
  );

  const handleIncrement = () => {
    if (ingredientsOptions.length <= selectedIngredientOptions.length) {
      return;
    }

    const randomIndex = Math.floor(Math.random() * filteredOptions.length);
    setSelectedIngredientOptions((prevOptions) => [
      ...prevOptions,
      {
        ...filteredOptions[randomIndex],
        id: nanoid(),
        hasPlaceholder: true,
      },
    ]);
  };

  const handleDecrement = () => {
    if (selectedIngredientOptions.length <= 0) {
      return;
    }

    setSelectedIngredientOptions((prevOptions) =>
      prevOptions.slice(0, prevOptions.length - 1)
    );
  };

  const handleDelete = (id) => {
    setSelectedIngredientOptions((prevOptions) =>
      prevOptions.filter((option) => option.value !== id)
    );
  };

  const handleSelect = (newOption, id) => {
    setSelectedIngredientOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.id === id ? { ...newOption, id, hasPlaceholder: false } : option
      )
    );
  };

  return (
    <>
      <div className="flex justify-between lg:w-[540px]">
        <AddDrinkTitle text={t('title2.AddDrink')} className="inline-block" />
        <div
          id="counter"
          className="w-[104px] h-[38px] md:w-[114px] md:h-[44px]  flex justify-around items-center border-solid border-border-color-search dark:border-grey-text-color border-[1px] rounded-3xl"
        >
          <button
            type="button"
            data-action="decrement"
            onClick={handleDecrement}
          >
            <svg
              width="16"
              height="16"
              className="stroke-button-hover-color dark:stroke-primary-text-color   hover:stroke-[#848080] focus:stroke-[#848080] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] "
            >
              <use href={`${sprite}#icon-minus`} />
            </svg>
          </button>
          <span id="value" className="flex text-center">
            {selectedIngredientOptions.length}
          </span>
          <button
            type="button"
            data-action="increment"
            onClick={handleIncrement}
          >
            <svg
              width="16"
              height="16"
              className="stroke-button-hover-color dark:stroke-primary-text-color   hover:stroke-[#848080] focus:stroke-[#848080] ease-[cubic-bezier(0.4, 0, 0.2, 1)] duration-[250ms] "
            >
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </button>
        </div>
      </div>
      {selectedIngredientOptions?.length > 0 && (
        <ul className="mb-20 lg:w-[540px]">
          {selectedIngredientOptions.map(
            ({ value, enTitle, id, hasPlaceholder }) => (
              <DrinkIngrediendFieldItem
                key={value}
                value={{ value, label: t(`ingredients.${enTitle}`), id }}
                hasPlaceholder={hasPlaceholder}
                placeholder={t(`ingredients.${enTitle}`)}
                options={filteredOptions}
                onDelete={() => handleDelete(value)}
                onSelect={(selected) => handleSelect(selected, id)}
              />
            )
          )}
        </ul>
      )}
    </>
  );
};
