import Select from 'react-select';

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

const DrinkPageHero = () => {
  return (
    <>
      <input type="file" name="drinkThumb" required />
      <input type="text" name="drink" placeholder="Enter item title" required />
      <input
        type="text"
        name="description"
        placeholder="Enter about recipe"
        required
      />
      <Select options={optionsCategory} name="category" />
      <Select options={optionsGlass} name="glass" />
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

export default DrinkPageHero;
