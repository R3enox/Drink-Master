import { useEffect, useState } from 'react';
import Select from 'react-select';
import sprite from '../../assets/sprite.svg';
import { useForm } from 'react-hook-form';
// fetch categories+ingredients
const categories = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  'Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee/Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer',
  'Soft Drink',
];
const ingridients = [
  'Light rum',
  'Coffee liqueur',
  'Juice',
  'Whiskey',
  'Cocoa',
  'Lemon vodka',
];
const categoriesOptions = categories.map((item) => ({
  value: item.toLowerCase().replace(/ /g, '%20'),
  label: item,
}));
const ingredientsOptions = ingridients.map((item) => ({
  value: item.toLowerCase().replace(/ /g, '%20'),
  label: item,
}));

const initialState = {
  category: '',
  ingredient: '',
  keyName: '',
};
export const DrinksSearch = ({ onFilterChange }) => {
  const [selectedFilters, setSelectedFilters] = useState(initialState);
  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: { keyName: '' },
  });

  const handleFilterChange = (filterType, selectedValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: selectedValue,
    }));
  };
  const handleReset = () => {
    setValue('keyName', '');
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      keyName: '',
    }));
  };
  const onSubmit = (values) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      keyName: values.keyName,
    }));
  };
  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters]);

  return (
    <div className="flex flex-col md:flex-row gap-3.5 md:gap-2 pt-[40px] md:pt-60px lg:pt-80px">
      <form onSubmit={handleSubmit(onSubmit)} className="bg-transparent">
        <input
          className="bg-transparent"
          type="text"
          placeholder="Enter the text"
          onChange={(e) => {
            setValue('keyName', e.target.value);
          }}
          value={watch('keyName') || ''}
        />
        {watch('keyName') && (
          <button type="reset" onClick={handleReset}>
            <svg className="fill-primary-text-color sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
              <use href={sprite + '#icon-cross'}></use>
            </svg>
          </button>
        )}
        <button type="submit">
          <svg className="fill-primary-text-color sm:w-[22px] h-[22px] md:w-[28px] md:h-[28px]">
            <use href={sprite + '#icon-search'}></use>
          </svg>
        </button>
      </form>
      <Select
        options={categoriesOptions}
        placeholder={'All Categories'}
        isClearable={true}
        onChange={(selectedValue) =>
          handleFilterChange(
            'category',
            selectedValue ? selectedValue.value : ''
          )
        }
      />
      <Select
        /* styles={{
          backgroundColor: 'primary-text-button-color',
          color: 'white',
        }} */
        className="bg-primary-text-button-color text-primary-text-color"
        options={ingredientsOptions}
        placeholder={'Ingredients'}
        isClearable={true}
        onChange={(selectedValue) =>
          handleFilterChange(
            'ingredient',
            selectedValue ? selectedValue.value : ''
          )
        }
      />
    </div>
  );
};
