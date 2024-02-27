import DrinksItem from '../DrinksItem/DrinksItem';

const DrinksList = ({ data, openMyDrinkModal, onChooseItem }) => {
  return (
    <ul className="flex flex-col gap-y-[40px] md:flex-row md:flex-wrap md:gap-x-[20px] md:gap-y-[80px]">
      {data &&
        data.map((drink) => (
          <DrinksItem
            key={drink._id}
            myDrink={drink}
            openMyDrinkModal={openMyDrinkModal}
            onChooseItem={onChooseItem}
          />
        ))}
    </ul>
  );
};

export default DrinksList;
