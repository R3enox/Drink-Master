import { Link } from 'react-router-dom';
import { useDeleteMyDrinkMutation } from '../../redux/myDrinks/myDrinksSlice';

const DrinksItem = ({ myDrink, onDelete }) => {
  const { _id, drink, drinkThumb, alcoholic, description } = myDrink;
  const [deleteMyDrink] = useDeleteMyDrinkMutation();

  const handleDelete = async () => {
    try {
      await deleteMyDrink(_id);
      console.log('Drink deleted successfully');
      onDelete();
    } catch (error) {
      console.error('Error deleting drink', error);
    }
  };

  return (
    <li>
      <img src={drinkThumb || 'placeholderImage'} alt={drink} />
      <h2>{drink}</h2>
      <p>{alcoholic ? 'Alcoholic' : 'Non-alcoholic'}</p>
      <p>{description}</p>
      <Link to={`/drink/${_id}`}>See more</Link>
      <br></br>
      <button type="button" onClick={handleDelete}>
        {'Видалити'}
      </button>
    </li>
  );
};

export default DrinksItem;
