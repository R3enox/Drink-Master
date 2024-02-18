import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  // persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import { drinksReducer } from './drinks/drinksSlice';
import { authReducer } from './auth/authReducer';
// import { filterReducer } from './filter/filterSlice';
// import { modalReducer } from './modal/modalSlice';

// const authConfig = {
//   key: 'auth',
//   storage,
//   withelist: ['token'],
// };

export const store = configureStore({
  reducer: {
    auth: persistReducer(authConfig, authReducer),
    drinks: drinksReducer,
    // filterStore: filterReducer,
    // modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
