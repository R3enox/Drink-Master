
export const toggleFavorite = async (id,isFav,dispatch,deleteFavorite,setIsFavorite,addFavorite,setIsFirstRender,toast) => {
    try {
      if (isFav) {
        await dispatch(deleteFavorite(id));
        setIsFavorite(false);
      } else {
        await dispatch(addFavorite(id));
        setIsFavorite(true);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsFirstRender(false);
    }
  };