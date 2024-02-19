import { useEffect, useState } from 'react';
import Select from 'react-select';
import sprite from '../../assets/sprite.svg';
import { useForm } from 'react-hook-form';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import { useSelector } from 'react-redux';
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
  const user = useSelector(selectAuthUser);
  console.log(user);
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
            console.log(e);
            setValue('keyName', e.target.value);
          }}
          value={watch('keyName') || ''}
        />
        <div className="flex items-center">
          <button
            type="reset"
            onClick={handleReset}
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
          handleFilterChange(
            'category',
            selectedValue ? selectedValue.value : ''
          )
        }
      />
      <Select
        options={ingredientsOptions}
        placeholder={'Ingredients'}
        classNamePrefix="searchSelect"
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
