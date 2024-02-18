import sprite from '../../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import { AddDrinkTitle } from './AddDrinkTitle';
import Select from 'react-select';
import { nanoid } from 'nanoid';

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

export const DrinkIngredientsFields = () => {
  const [ingredientsCount, setIngredientsCount] = useState(3);
  const [ingredientInputs, setIngredientInputs] = useState([]);

  useEffect(() => {
    const newIngredientInputs = [];
    for (let i = 0; i < ingredientsCount; i++) {
      const id = nanoid();
      newIngredientInputs.push(
        <li key={id} className="flex mb-3.5">
          <Select
            className="flex-initial w-52"
            options={optionsCategory}
            classNamePrefix="ingredientsSelect"
            defaultValue={optionsCategory[i]}
          />
          <label>
            <input type="text" placeholder="1  cl" />
          </label>
          <button type="button" id={id} onClick={() => handleDelete(id)}>
            <svg
              width="16"
              height="16"
              style={{ stroke: 'red' }}
              className="pointer-events-none"
            >
              <use href={`${sprite}#icon-cross`} />
            </svg>
          </button>
        </li>
      );
    }
    setIngredientInputs(newIngredientInputs);
  }, [ingredientsCount]);

  const handleInc = () => {
    if (optionsCategory.length <= ingredientsCount) {
      return;
    }
    const newCount = ingredientsCount + 1;
    setIngredientsCount(newCount);
  };

  const handleDec = () => {
    if (ingredientsCount <= 3) {
      return;
    }
    const newCount = ingredientsCount - 1;
    setIngredientsCount(newCount);
  };

  const handleDelete = (id) => {
    setIngredientInputs((prevInputs) =>
      prevInputs.filter((input) => input.key !== id)
    );
    setIngredientsCount((prevCounter) => prevCounter - 1);
  };

  return (
    <>
      <div className="flex gap-20">
        <AddDrinkTitle text="Ingredients" />
        <div
          id="counter"
          className="w-24 flex justify-around text-center border-solid border-grey-text-color border-2 rounded-3xl"
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
      <ul>{ingredientInputs}</ul>
    </>
  );
};
