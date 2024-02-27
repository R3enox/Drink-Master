import { Link } from 'react-router-dom';
const DrinksItem = ({ myDrink, onDelete }) => {
  const { _id, drink, drinkThumb, alcoholic, description } = myDrink;
  return (
    <li>
      <img src={drinkThumb || 'placeholderImage'} alt={drink} />
      <h2>{drink}</h2>
      <p>{alcoholic ? 'Alcoholic' : 'Non alcoholic'}</p>
      <p>{description}</p>
      <Link to={`/drink/${_id}`}>See more</Link>
      <button onClick={() => onDelete(_id)}>Видалити</button>
    </li>
  );
};

export default DrinksItem;
