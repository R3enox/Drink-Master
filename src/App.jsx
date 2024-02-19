import { Suspense, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { AppWrapper } from './App.styled';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import DrinksPage from './pages/DrinksPage/DrinksPage';
import SignInPage from './pages/SigninPage/SigninPage';
import SignUpPage from './pages/SignupPage/SignupPage';

import { refreshUserThunk } from './redux/auth/authOperations';
import { selectAuthIsRefreshing } from './redux/auth/authSelectors';

// const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));

function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  // console.log(test);

  return (
    !isRefreshing && (
      <Layout>
        <Suspense fallback={null}>
          <AppWrapper>
            <Routes>
              <Route path="/" element={<Navigate to="/welcome" />} />
              <Route path="/welcome" element={<WelcomePage />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/signin" element={<SignInPage />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/drinks" element={<DrinksPage />} />
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </AppWrapper>
        </Suspense>
      </Layout>
    )
  );
}
export default App;
