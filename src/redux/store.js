import { configureStore } from '@reduxjs/toolkit';

import { avatarApi } from './auth/usersOperations';
import storage from 'redux-persist/lib/storage';
import { drinksReducer } from './drinks/drinksSlice';




export const store = configureStore({
  reducer: {
    drinks: drinksReducer,
    [avatarApi.reducerPath]: avatarApi.reducer,
  },



    

  middleware: (getDefaultMiddleware) =>

    getDefaultMiddleware().concat(avatarApi.middleware)
});


