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

import { authReducer } from './auth/authReducer';
import { filtersReducer } from './filters/slice';
import { drinkIdStorageReducer } from './drinkIdStorageReducer/drinkIdStorageReducer';
import { myDrinksApi } from './myDrinks/myDrinksSlice';
import { favoriteApi } from './favorites/favoriteSlice';
import { drinksReducer } from './drinks/drinksSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    drinks: drinksReducer,
    [userApi.reducerPath]: userApi.reducer,
    filters: filtersReducer,
    drinkIdStorage: drinkIdStorageReducer,
    [myDrinksApi.reducerPath]: myDrinksApi.reducer,
    [favoriteApi.reducerPath]: favoriteApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(
      myDrinksApi.middleware,
      favoriteApi.middleware
    ),
});

export const persistor = persistStore(store);
