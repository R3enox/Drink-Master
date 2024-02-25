import { configureStore } from '@reduxjs/toolkit';
import { userApi } from './auth/usersOperations';
import { drinksApi } from '../redux/drinks/drinksAPI';
import { authReducer } from './auth/authReducer';
import { filtersReducer } from './filters/slice';
import { drinkIdApi } from './drinkIdStorageReducer/drinkIdStorageReducer';
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
import { favoriteApi } from './favorites/favoriteSlice';
import { popularDrinksReducer } from './popular/popularSlice';
import { addDrinkReducer } from './addDrinks/addDrinkSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    popular: popularDrinksReducer,
    addDrink: addDrinkReducer,
    [userApi.reducerPath]: userApi.reducer,
    [drinksApi.reducerPath]: drinksApi.reducer,
    filters: filtersReducer,
    [drinkIdApi.reducerPath]: drinkIdApi.reducer,
    [myDrinksApi.reducerPath]: myDrinksApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      drinksApi.middleware,
      myDrinksApi.middleware,
      favoriteApi.middleware,
      drinkIdApi.middleware,
    ),
});

export const persistor = persistStore(store);
