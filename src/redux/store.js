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
// import { drinksReducer } from './drinks/drinksSlice';
import { drinksApi } from '../redux/drinks/drinksAPI';
import { authReducer } from './auth/authReducer';
import { filtersReducer } from './filters/slice';
import { drinkIdStorageReducer } from './drinkIdStorageReducer/drinkIdStorageReducer';
import { myDrinksApi } from './myDrinks/myDrinksSlice';
import { favoriteApi } from './favorites/favoriteSlice';

const authConfig = {
  key: 'auth',
  storage,
  withelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    // drinks: drinksReducer,
    [drinksApi.reducerPath]: drinksApi.reducer,

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

    }).concat(myDrinksApi.middleware, favoriteApi.middleware,drinksApi.middleware),

});

export const persistor = persistStore(store);
