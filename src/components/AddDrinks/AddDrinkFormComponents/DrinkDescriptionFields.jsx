import Select from 'react-select';
import styles from './DrinkDescriptionFields.module.css';

const optionsCategory = [
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Shake', label: 'Shake' },
  { value: 'Other/Unknown', label: 'Other/Unknown' },
  { value: 'Cocoa', label: 'Cocoa' },
];
const optionsGlass = [
  { value: 'Ordinary Drink', label: 'Ordinary Drink' },
  { value: 'Cocktail', label: 'Cocktail' },
  { value: 'Shake', label: 'Shake' },
  { value: 'Other/Unknown', label: 'Other/Unknown' },
  { value: 'Cocoa', label: 'Cocoa' },
];

export const DrinkPageHero = () => {
  return (
    <>
      <input type="file" name="drinkThumb" required className="block" />
      <input
        type="text"
        name="drink"
        placeholder="Enter item title"
        required
        className="block"
      />
      <input
        type="text"
        name="description"
        placeholder="Enter about recipe"
        className="block"
        required
      />
      <Select
        className={styles.custom_select__control}
        classNamePrefix="custom_select"
        options={optionsCategory}
        name="category"
        placeholder="Category"
      />
      <Select options={optionsGlass} name="glass" placeholder="Glass" />
      <label>
        <input type="radio" name="alcoholic" value="Alcoholic" required />
        Alcoholic
      </label>
      <label>
        <input type="radio" name="alcoholic" value="Non-alcoholic" required />
        Non-alcoholic
      </label>
    </>
  );
};
