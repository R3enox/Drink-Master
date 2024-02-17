import { configureStore } from '@reduxjs/toolkit';

import { avatarApi } from './auth/usersOperations';
import storage from 'redux-persist/lib/storage';
import { drinksReducer } from './drinks/drinksSlice';

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


export const store = configureStore({
  reducer: {
    drinks: drinksReducer,
    [avatarApi.reducerPath]: avatarApi.reducer,
  },



    

  middleware: (getDefaultMiddleware) =>{
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    getDefaultMiddleware().concat(avatarApi.middleware)},
});

// export const persistor = persistStore(store);
