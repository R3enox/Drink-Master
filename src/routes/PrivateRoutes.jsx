import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import PrivateSharedLayout from '../components/SharedLayout/PrivateSharedLayout';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const DrinksPage = lazy(() => import('pages/DrinksPage/DrinksPage'));
const FavoriteDrinksPage = lazy(() =>
  import('pages/FavoriteDrinksPage/FavoriteDrinksPage')
);
const MyDrinksPage = lazy(() => import('pages/MyDrinksPage/MyDrinksPage'));
const DrinkPage = lazy(() => import('pages/DrinkPage/DrinkPage'));
const AddDrinkPage = lazy(() => import('pages/AddDrinkPage/AddDrinkPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateSharedLayout />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomePage />} />
        <Route path="drinks" element={<DrinksPage />} />
        <Route path="favorites" element={<FavoriteDrinksPage />} />
        <Route path="my" element={<MyDrinksPage />} />
        <Route path="drink/:drinkId" element={<DrinkPage />} />
        <Route path="add" element={<AddDrinkPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default PrivateRoutes;
