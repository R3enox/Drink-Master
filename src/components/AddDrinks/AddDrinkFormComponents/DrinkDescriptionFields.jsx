import { nanoid } from 'nanoid';

const array = [
  'Ordinary Drink',

  'Cocktail',

  'Shake',

  'Other/Unknown',
  'Cocoa',
  'Shot',
  'Coffee/Tea',
  'Homemade Liqueur',
  'Punch/Party Drink',
  'Beer, Soft Drink',
];

const DrinkPageHero = () => {
  return (
    <>
      <input type="file" />
      <input type="text" placeholder="Enter item title" required />
      <input type="text" placeholder="Enter about recipe" required />
      <button type="button">Category</button>
      <ul>
        {array.map((elem) => {
          return <li key={nanoid()}>{elem}</li>;
        })}
      </ul>
      <button type="button">Glass</button>
      <ul></ul>
      <label>
        <input type="radio" name="alcoholic" required />
        Alcoholic
      </label>
      <label>
        <input type="radio" name="alcoholic" required />
        Non-alcoholic
      </label>
    </>
  );
};

export default DrinkPageHero;
