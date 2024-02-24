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
import { favoriteApi } from './favorites/favoriteSlice';
import { popularDrinksReducer } from './popular/popularSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    popular: popularDrinksReducer,
    [userApi.reducerPath]: userApi.reducer,
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
    }).concat(
      drinksApi.middleware,
      myDrinksApi.middleware,
      favoriteApi.middleware
    ),
});

export const persistor = persistStore(store);
