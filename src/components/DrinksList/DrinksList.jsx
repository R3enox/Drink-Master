import DrinksItem from '../DrinksItem/DrinksItem';

const DrinksList = ({ data, onDelete }) => {
  return (
    <ul>
      {data &&
        data.map((drink) => (
          <DrinksItem
            key={drink._id}
            myDrink={drink}
            onDelete={() => onDelete(drink._id)}
          />
        ))}
    </ul>
  );
};

export default DrinksList;
