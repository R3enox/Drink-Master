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
import { drinksReducer } from './drinks/drinksSlice';
// import { drinksApi } from '../redux/drinks/drinksSlice';
import { authReducer } from './auth/authReducer';

const authConfig = {
  key: 'auth',
  storage,
  withelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    drinks: drinksReducer,
    // [drinksApi.reducerPath]: drinksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware().concat(drinksApi.middleware),
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
