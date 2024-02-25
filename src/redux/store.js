import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './auth/usersOperations';
import { drinksApi } from '../redux/drinks/drinksAPI';
import { authReducer } from './auth/authReducer';
import { filtersReducer } from './filters/slice';
import { drinkIdStorageReducer } from './drinkIdStorageReducer/drinkIdStorageReducer';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import { myDrinksApi } from './myDrinks/myDrinksSlice';
import { popularDrinksReducer } from './popular/popularSlice';
import { addDrinkReducer } from './addDrinks/addDrinkSlice';
import { favoritesReducer } from './favorites/favoriteSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    popular: popularDrinksReducer,
    addDrink: addDrinkReducer,
    [userApi.reducerPath]: userApi.reducer,
    [drinksApi.reducerPath]: drinksApi.reducer,
    filters: filtersReducer,
    drinkIdStorage: drinkIdStorageReducer,
    [myDrinksApi.reducerPath]: myDrinksApi.reducer,
    favorites: favoritesReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(drinksApi.middleware, myDrinksApi.middleware),
});

export const persistor = persistStore(store);
