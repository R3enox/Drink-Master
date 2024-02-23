import DrinksItem from './DrinksItem';

const DrinksList = ({ data, onDelete }) => {
  return (
    <ul>
      {data &&
        data.map((drink) => (
          <DrinksItem key={drink._id} myDrink={drink} onDelete={onDelete} />
        ))}
    </ul>
  );
};

export default DrinksList;
