const DrinksItem = ({ myDrink, onSeeMore, onDelete }) => {
  const { drink, drinkThumb, alcoholic, description } = myDrink;

  return (
    <li>
      <h2>{drink}</h2>
      <img src={drinkThumb || 'placeholderImage'} alt={drink} />
      <p>{alcoholic ? 'Alcoholic' : 'Non-alcoholic'}</p>
      <p>{description}</p>
      <a href="#" onClick={onSeeMore}>
        See more
      </a>
      <button onClick={onDelete}>Видалити</button>
    </li>
  );
};

export default DrinksItem;
