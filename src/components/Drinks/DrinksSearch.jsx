import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { useFilters } from '../../hooks/useFilters';
import Select from 'react-select';
import { useDrinkFilters } from '../../hooks/useDrinkFilters';
import {
  createOptionsFromArrOfObj,
  createOptionsFromArrOfStr,
} from '../../helpers/createCollectionOptions';
import sprite from '../../assets/sprite.svg';

import { useTranslation } from 'react-i18next';
import '../../i18n';

export const DrinksSearch = () => {
  const { t } = useTranslation();

  const { categories, ingredients } = useFilters();
  const { search, category, ingredient, setDrinkFilter } = useDrinkFilters();

  const categoriesOptions = useMemo(
    () => createOptionsFromArrOfStr(categories ?? [], t, 'categories'),
    [categories, t]
  );

  const ingredientsOptions = useMemo(
    () => createOptionsFromArrOfObj(ingredients ?? [], t, 'ingredients'),
    [ingredients, t]
  );
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      search: search || '',
    },
  });

  const onSubmit = (values) => {
    setDrinkFilter('search', values.search);
  };

  return (
    <div className="flex flex-col items-center md:flex-row gap-[14px] md:gap-[8px] mt-[40px] md:mt-[60px] lg:mt-[80px]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-row w-full justify-between items-center md:w-[264px] border-border-color-search dark:border-border-color hover:border-hover-border-color-search dark:hover:border-grey-text-color hover:color-transparent bg-transparent h-[54px] rounded-[200px] border-[1px] py-[18px] md:py-[14px] px-[24px]"
      >
        <input
          className="bg-transparent w-full outline-none text-[14px] md:text-[17px] leading-[1.29] md:leading-[1.56]  placeholder:text-dark-theme-bg-color dark:placeholder:text-primary-text-color"
          type="text"
          placeholder={t('inputPlaceholder.DrinksSearch.text')}
          onChange={(e) => {
            setValue('search', e.target.value);
          }}
          value={watch('search' || '')}
        />
        <div className="flex items-center">
          <button
            type="reset"
            onClick={() => {
              setValue('search', '');
              setDrinkFilter('search', '');
            }}
            className="w-[10px] h-[10px] md:w-[15px] md:h-[15px]"
          >
            {watch('search') && (
              <svg className="stroke-primary-text-button-color fill-none dark:stroke-primary-text-color w-[10px] h-[10px] md:w-[15px] md:h-[15px]">
                <use href={sprite + '#icon-cross'}></use>
              </svg>
            )}
          </button>
          <button type="submit">
            <svg className="stroke-primary-text-button-color fill-none dark:stroke-primary-text-color ml-[10px] sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
              <use href={sprite + '#icon-search'}></use>
            </svg>
          </button>
        </div>
      </form>
      <Select
        options={categoriesOptions}
        placeholder={t('inputPlaceholder.DrinksSearch.SelectCategory')}
        classNamePrefix="searchSelect"
        isClearable={category && true}
        onChange={(selectedValue) =>
          setDrinkFilter('category', selectedValue?.value || '')
        }
        defaultValue={{
          value: category || '',
          label: category || t('inputPlaceholder.DrinksSearch.SelectCategory'),
        }}
      />
      <Select
        options={ingredientsOptions}
        placeholder={t('inputPlaceholder.DrinksSearch.SelectIngredients')}
        classNamePrefix="searchSelect"
        isClearable={ingredient && true}
        onChange={(selectedValue) =>
          setDrinkFilter('ingredient', selectedValue?.value || '')
        }
        defaultValue={{
          value: ingredient || '',
          label:
            ingredient || t('inputPlaceholder.DrinksSearch.SelectIngredients'),
        }}
      />
    </div>
  );
};
