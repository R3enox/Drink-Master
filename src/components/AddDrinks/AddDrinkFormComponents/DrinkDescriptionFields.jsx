import Select from 'react-select';

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
        classNamePrefix="custom_select"
        className="mb-8"
        options={optionsCategory}
        name="category"
        placeholder="Category"
        defaultValue={optionsCategory[0]}
      />
      <Select
        classNamePrefix="custom_select"
        options={optionsGlass}
        name="glass"
        defaultValue={optionsCategory[0]}
        placeholder="Glass"
      />
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
