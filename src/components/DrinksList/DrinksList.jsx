import DrinksItem from '../DrinksItem/DrinksItem';

const DrinksList = ({ data, onDelete }) => {
  return (
    <div>
      <ul className="flex flex-col gap-y-[40px] md:flex-row flex-wrap md:gap-x-[20px] md:gap-y-[80px]  ">
        {data &&
          data.map((drink) => (
            <DrinksItem
              key={drink._id}
              myDrink={drink}
              onDelete={() => onDelete(drink._id)}
            />
          ))}
      </ul>
    </div>
  );
};

export default DrinksList;
