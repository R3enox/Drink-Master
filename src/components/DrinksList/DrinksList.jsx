import DrinksItem from '../DrinksItem/DrinksItem';

const DrinksList = ({ data, onSeeMore, onDelete }) => {
  return (
    <div>
      {/* {isLoading && <Loader />} */}
      {data.map((myDrink) => (
        <DrinksItem
          key={myDrink._id}
          myDrink={myDrink}
          onSeeMore={() => onSeeMore(myDrink._id)}
          onDelete={() => onDelete(myDrink._id)}
        />
      ))}
    </div>
  );
};

export default DrinksList;
