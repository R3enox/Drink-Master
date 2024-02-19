import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';

import { getCategories, getGlasses, getIngredients } from './operations';

const initialState = {
  categories: null,
  ingredients: null,
  glasses: null,
};

export const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    clearFilters: (state) => {
      state.categories = null;
      state.ingredients = null;
      state.glasses = null;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(getCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
      })
      .addCase(getIngredients.fulfilled, (state, action) => {
        state.ingredients = action.payload;
      })
      .addCase(getGlasses.fulfilled, (state, action) => {
        state.glasses = action.payload;
      }),
});

const filtersPersistConfig = {
  key: 'filters',
  storage,
  whitelist: ['categories', 'ingredients', 'glasses'],
};

export const filtersReducer = persistReducer(
  filtersPersistConfig,
  filtersSlice.reducer
);
