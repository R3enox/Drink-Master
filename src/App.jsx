import { useEffect, Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import SharedLayout from './components/SharedLayout/SharedLayout';
import { RestrictedRoute } from './components/SharedLayout/RestrictedRoute';
import { PrivateRoute } from './components/SharedLayout/PrivateRoute';
// import { AppWrapper } from './App.styled';

import { refreshUserThunk } from './redux/auth/authOperations';
import { useAuth } from './hooks/useAuth';


const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const DrinksPage = lazy(() => import('pages/DrinksPage/DrinksPage'));
const FavoriteDrinksPage = lazy(() =>
  import('pages/FavoriteDrinksPage/FavoriteDrinksPage')
);
const MyDrinksPage = lazy(() => import('pages/MyDrinksPage/MyDrinksPage'));
const DrinkPage = lazy(() => import('pages/DrinkPage/DrinkPage'));
const AddDrinkPage = lazy(() => import('pages/AddDrinkPage/AddDrinkPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    !isRefreshing && (
      // <AppWrapper>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route
            path="/welcome"
            element={<RestrictedRoute component={<WelcomePage />} />}
          />
          <Route
            path="/signup"
            element={<RestrictedRoute component={<SignUpPage />} />}
          />
          <Route
            path="/signin"
            element={<RestrictedRoute component={<SignInPage />} />}
          />
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Navigate to="/home" />} />
            <Route
              path="home"
              element={<PrivateRoute component={<HomePage />} />}
            />
            <Route
              path="drinks"
              element={<PrivateRoute component={<DrinksPage />} />}
            />
            <Route
              path="favorites"
              element={<PrivateRoute component={<FavoriteDrinksPage />} />}
            />
            <Route
              path="my"
              element={<PrivateRoute component={<MyDrinksPage />} />}
            />
            <Route
              path="drink/:drinkId"
              element={<PrivateRoute component={<DrinkPage />} />}
            />
            <Route
              path="add"
              element={<PrivateRoute component={<AddDrinkPage />} />}
            />
            <Route
              path="*"
              element={
                isLoggedIn ? <NotFoundPage /> : <Navigate to="/welcome" />
              }
            />
          </Route>
        </Routes>
      </Suspense>
      // </AppWrapper>
    )
  );
};
