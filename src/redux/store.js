import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { drinksApi } from '../redux/drinks/drinksAPI';
import { authReducer } from './auth/authReducer';
import { filtersReducer } from './filters/slice';
import { drinkIdApi } from './drinkIdStorageReducer/drinkIdStorageReducer';
import { myDrinksApi } from './myDrinks/myDrinksSlice';
import { favoriteApi } from './favorites/favoriteSlice';

const authConfig = {
  key: 'auth',
  storage,
  witelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
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
