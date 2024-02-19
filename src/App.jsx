import { useEffect, Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppWrapper } from './App.styled';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import HomePage from './pages/HomePage/HomePage';
import DrinksPage from './pages/DrinksPage/DrinksPage';
import SharedLayout from './components/SharedLayout/SharedLayout';
import { selectAuthIsRefreshing } from './redux/auth/authSelectors';
import { refreshUserThunk } from './redux/auth/authOperations';

const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('./pages/SignUpPage1/SignUpPage1'));
const SignInPage = lazy(() => import('./pages/SignInPage1/SignInPage1'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  // console.log(test);

  return (
    !isRefreshing && (
      <AppWrapper>
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
            <Route path="/" element={<SharedLayout />}>
              <Route index element={<Navigate to="/welcome" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/drinks" element={<DrinksPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Route>
          </Routes>
        </Suspense>
      </AppWrapper>
    )
  );
}
export default App;
