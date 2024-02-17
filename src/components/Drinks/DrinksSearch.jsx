// fetch categories+ingredients

import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import Select from 'react-select';

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
  const formik = useFormik({
    initialValues: {
      keyName: '',
    },
    onSubmit: (values) => {
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        keyName: values.keyName,
      }));
    },
    onReset: () =>
      setSelectedFilters((prevFilters) => ({
        ...prevFilters,
        keyName: '',
      })),
  });
  const handleFilterChange = (filterType, selectedValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: selectedValue,
    }));
  };
  useEffect(() => {
    onFilterChange(selectedFilters);
  }, [selectedFilters]);

  return (
    <div className="filter-search">
      <form onSubmit={formik.handleSubmit} className="form-search">
        <input
          id="keyName"
          name="keyName"
          type="text"
          placeholder="Enter the text"
          onChange={formik.handleChange}
          value={formik.values.keyName}
        />
        <button type="submit">
          <svg className="icon-search" width="20px" height="20px">
            <use href="../../assets/sprite.svg#icon-search"></use>
          </svg>
        </button>
        {formik.values.keyName && (
          <button type="reset" onClick={formik.handleReset}>
            {/* <svg className="icon-cross" width="20px" height="20px">
            <use href="../../assets/sprite.svg#icon-cross"></use>
          </svg> */}
            X
          </button>
        )}
      </form>
      <Select
        className="basic-single"
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
        className="basic-single"
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
