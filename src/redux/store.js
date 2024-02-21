import { configureStore } from '@reduxjs/toolkit';

import {  userApi } from './auth/usersOperations';
import storage from 'redux-persist/lib/storage';

import { drinksReducer } from './drinks/drinksSlice';
import { authReducer } from './auth/authReducer';
import persistStore from 'redux-persist/es/persistStore';
import persistReducer from 'redux-persist/es/persistReducer';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

const authConfig = {
  key: 'auth',
  storage,
  withelist: ['token'],
};




export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    drinks: drinksReducer,
    [userApi.reducerPath]: userApi.reducer,
  },



    

  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(userApi.middleware)
});

export const persistor = persistStore(store);

