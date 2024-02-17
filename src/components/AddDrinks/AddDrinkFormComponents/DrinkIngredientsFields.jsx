import sprite from '../../../assets/sprite.svg';
import { useEffect, useState } from 'react';
import { AddDrinkTitle } from './AddDrinkTitle';
import Select from 'react-select';
import { nanoid } from 'nanoid';

export const DrinkIngredientsFields = () => {
  const [ingredientsCount, setIngredientsCount] = useState(3);
  const [ingredientInputs, setIngredientInputs] = useState([]);

  useEffect(() => {
    const newIngredientInputs = [];
    for (let i = 0; i < ingredientsCount; i++) {
      const id = nanoid();
      newIngredientInputs.push(
        <li key={id} className="flex">
          <Select className="flex-initial w-52" />
          <label>
            <input type="text" />
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
        <div id="counter">
          <button type="button" data-action="decrement" onClick={handleDec}>
            <svg width="16" height="16" style={{ stroke: 'red' }}>
              <use href={`${sprite}#icon-minus`} />
            </svg>
          </button>
          <span id="value">{ingredientsCount}</span>
          <button type="button" data-action="increment" onClick={handleInc}>
            <svg width="16" height="16" style={{ stroke: 'green' }}>
              <use href={`${sprite}#icon-plus`} />
            </svg>
          </button>
        </div>
      </div>
      <ul>{ingredientInputs}</ul>
    </>
  );
};
