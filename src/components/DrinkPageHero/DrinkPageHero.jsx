import { useSelector } from 'react-redux';
import {
  useAddFavoritesMutation,
  useRemoveFavoritesMutation,
} from '../../redux/favorites/favoriteSlice';
import { ButtonComponent } from '../reUseComponents/buttonComponent';
import { selectAuthUser } from '../../redux/auth/authSelectors';
import { useState } from 'react';

const DrinkPageHero = ({ cocktail }) => {
  const user = useSelector(selectAuthUser);
  const [isFirstRender, setIsFirstRender] = useState(true);

  const [addToFavorite] = useAddFavoritesMutation();

  const [deleteFavorite] = useRemoveFavoritesMutation();

  const { _id, drink, category, alcoholic, description, drinkThumb, favorite } =
    cocktail;

  const isFavoriteFirstRender = favorite?.includes(user.id);
  const [isFavorite, setIsFavorite] = useState(isFavoriteFirstRender);
  const isFav = isFirstRender ? isFavoriteFirstRender : isFavorite;

  const toggleFavorite = async (id) => {
    try {
      if (isFav) {
        await deleteFavorite(id);
        setIsFavorite(false);
      } else {
        await addToFavorite(id);
        setIsFavorite(true);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsFirstRender(false);
    }
  };

  return (
    <div className=" lg:flex justify-between">
      <div>
        <h2 className="pb-2 font-semibold text-2xl leading-tight text-gray-100 md:font-semibold md:text-5xl md:leading-tight lg:font-semibold lg:text-5xl lg:leading-[1.0625]">
          {drink}
        </h2>
        <p className="font-normal text-xs leading-4 text-grey-text-color pb-5 md:font-normal md:text-base md:leading-5">
          {category}/{alcoholic}
        </p>
        <p className="font-normal text-base leading-tight text-gray-100 text-start md:font-normal md:leading-[22px] md:w-[593px] lg:leading-[1.375] ">
          {description}
        </p>
        <div className="pt-10 pb-20">
          {isFav ? (
            <ButtonComponent
              descr={'Remove from favorites'}
              btnFunction={() => toggleFavorite(_id)}
              id={_id}
            />
          ) : (
            <ButtonComponent
              descr={'Add to favorite drinks'}
              btnFunction={() => toggleFavorite(_id)}
              id={_id}
            />
          )}
        </div>
      </div>
      <div>
        <img
          className="w-[335px]  rounded-xl md:w-[704px] md:object-cover lg:w-[400px] "
          src={drinkThumb}
          alt="poster cocktail"
        />
      </div>
    </div>
  );
};

export default DrinkPageHero;
