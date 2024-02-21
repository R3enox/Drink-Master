import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';

import { useFilters } from '../../hooks/useFilters';
import { useDrinkFilters } from '../../hooks/useDrinkFilters';
import sprite from '../../assets/sprite.svg';

const createCategoriesOptions = (collection) =>
  collection.map((title) => ({
    value: title,
    label: title,
  }));
const createIngredientsOptions = (collection) =>
  collection.map(({ title }) => ({
    value: title,
    label: title,
  }));

export const DrinksSearch = () => {
  const { categories, ingredients } = useFilters();
  const { keyName, category, ingredient, setDrinkFilter } = useDrinkFilters();

  const categoriesOptions = useMemo(
    () => createCategoriesOptions(categories ?? []),
    [categories]
  );

  const ingredientsOptions = useMemo(
    () => createIngredientsOptions(ingredients ?? []),
    [ingredients]
  );

  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      keyName: keyName || '',
    },
  });

  const onSubmit = (values) => {
    setDrinkFilter('keyName', values.keyName);
  };

  return (
    <div className="flex flex-col  items-center md:flex-row gap-[14px] md:gap-[8px] pt-[40px] md:pt-[60px] lg:pt-[80px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row w-full justify-between items-center md:w-[264px] hover:border-grey-text-color hover:color-transparent bg-transparent h-[54px] rounded-[200px] border-[1px] border-border-color  placeholder-border-color py-[18px] md:py-[14px] px-[24px]"
      >
        <input
          className="bg-transparent w-full outline-none text-[14px] md:text-[17px] leading-[1.29] md:leading-[1.56]"
          type="text"
          placeholder="Enter the text"
          onChange={(e) => {
            setValue('keyName', e.target.value);
          }}
          value={watch('keyName' || '')}
        />
        <div className="flex items-center">
          <button
            type="reset"
            onClick={() => {
              setValue('keyName', '');
              setDrinkFilter('keyName', '');
            }}
            className="w-[10px] h-[10px] md:w-[15px] md:h-[15px]"
          >
            {watch('keyName') && (
              <svg className=" stroke-primary-text-color w-[10px] h-[10px] md:w-[15px] md:h-[15px]">
                <use href={sprite + '#icon-cross'}></use>
              </svg>
            )}
          </button>
          <button type="submit">
            <svg className="stroke-primary-text-color ml-[10px] sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
              <use href={sprite + '#icon-search'}></use>
            </svg>
          </button>
        </div>
      </form>
      <Select
        options={categoriesOptions}
        placeholder={'All categories'}
        classNamePrefix="searchSelect"
        isClearable={true}
        onChange={(selectedValue) =>
          setDrinkFilter('category', selectedValue.value)
        }
        defaultValue={{
          value: category || '',
          label: category || 'All categories',
        }}
      />
      <Select
        options={ingredientsOptions}
        placeholder={'Ingredients'}
        classNamePrefix="searchSelect"
        isClearable={true}
        onChange={(selectedValue) =>
          setDrinkFilter('ingredient', selectedValue.value)
        }
        defaultValue={{
          value: ingredient || '',
          label: ingredient || 'Ingredients',
        }}
      />
    </div>
  );
};
