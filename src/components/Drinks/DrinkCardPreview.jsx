import { Link } from 'react-router-dom';
import defaultImgDrink from '../../assets/block.jpg';

// заглушка для фото
export const DrinkCardPreview = ({ drink }) => {
  const imageSrc = drink.drinkThumb || defaultImgDrink;

  return (
    <li key={drink._id}>
      <img src={imageSrc} alt={drink.drink} width="400px" height="400px" />
      <div className="drink-preview-thumb">
        <p>{drink.drink}</p>
        <Link to={`../drink/${drink._id}`}> See more</Link>
      </div>
    </li>
  );
};
