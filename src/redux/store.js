import { configureStore } from '@reduxjs/toolkit';

import { avatarApi } from './auth/usersOperations';
import storage from 'redux-persist/lib/storage';
import { drinksReducer } from './drinks/drinksSlice';
import { drinksReducer } from './drinks/drinksSlice';
import { authReducer } from './auth/authReducer';

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
    [avatarApi.reducerPath]: avatarApi.reducer,
  },



    

  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(avatarApi.middleware)
});


