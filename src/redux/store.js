import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import { drinksApi } from '../redux/drinks/drinksAPI';
import { authReducer } from './auth/authReducer';
=======
import { userApi } from './auth/usersOperations';
>>>>>>> main
import { filtersReducer } from './filters/slice';
import { drinkIdStorageReducer } from './drinkIdStorageReducer/drinkIdStorageReducer';
import { drinksReducer } from './drinks/drinksSlice';
import { authReducer } from './auth/authReducer';
import { myDrinksReducer } from './myDrinks/myDrinksSlice';
import { favoritesReducer } from './favorites/favoriteSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { popularDrinksReducer } from './popular/popularSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
<<<<<<< HEAD
   
    [drinksApi.reducerPath]: drinksApi.reducer,
=======
    drinks: drinksReducer,
    popular: popularDrinksReducer,
    [userApi.reducerPath]: userApi.reducer,
>>>>>>> main
    filters: filtersReducer,
    drinkIdStorage: drinkIdStorageReducer,
    myDrinks: myDrinksReducer,
    favorites: favoritesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
