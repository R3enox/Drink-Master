// fetch categories+ingredients
// select from Ivetta
const categories = [
  'Ordinary Drink',
  'Cocktail',
  'Shake',
  ' Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee/Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer',
  'Soft Drink',
];
const ingridients = [
  'Highball glass',
  'Cocktail glass',
  'Old-fashioned glass',
  'Whiskey Glass',
  'Collins glass',
  'Pousse cafe glass',
  'Champagne flute',
  'Whiskey sour glass',
  'Cordial glass',
  'Brandy snifter',
  'White wine glass',
  'Nick and Nora Glass',
  'Hurricane glass',
  'Coffee mug',
  'Shot glass',
  'Jar',
  'Irish coffee cup',
  'Punch bowl',
  'Pitcher',
  'Pint glass',
  'Copper Mug',
  'Wine Glass',
  'Beer mug',
  'Margarita/Coupette glass',
  'Beer pilsner',
  'Beer Glass',
  'Parfait glass',
  'Mason jar',
  'Margarita glass',
  'Martini Glass',
  'Balloon Glass',
  'Coupe Glass',
];
export const FilterSearch = () => {
  return (
    <div className="filter-search">
      <input type="text" />
      <select name="category">
        {categories.map((category, i) => (
          <option key={category} value={category[i]}>
            {category}
          </option>
        ))}
      </select>
      <select name="ingredient">
        {ingridients.map((ingredient, i) => (
          <option key={ingredient} value={ingredient[i]}>
            {ingredient}
          </option>
        ))}
      </select>{' '}
    </div>
  );
};
