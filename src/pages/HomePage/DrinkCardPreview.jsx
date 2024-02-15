// import defaultImgDrink from '../../assets/block.jpg';
// заглушка для фото
export const DrinkCardPreview = ({ drink }) => {
  const imageSrc = drink.drinkThumb;
  //   || defaultImgDrink;
  return (
    <li key={drink.id}>
      <img src={imageSrc} alt={drink.drink} width="335px" />
      <p>{drink.drink}</p>
      <a href="">See more</a>
    </li>
  );
};
