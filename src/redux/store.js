import { configureStore } from '@reduxjs/toolkit';
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
import { addDrinkReducer } from './addDrinks/addDrinkSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    drinks: drinksReducer,
    popular: popularDrinksReducer,
    filters: filtersReducer,
    drinkIdStorage: drinkIdStorageReducer,
    myDrinks: myDrinksReducer,
    favorites: favoritesReducer,
    addDrink: addDrinkReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
