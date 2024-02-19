import { Navigate, Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import { Suspense } from 'react';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Layout from './components/Layout/Layout';
import HomePage from './pages/HomePage/HomePage';
import DrinksPage from './pages/DrinksPage/DrinksPage';
import MyDrinksPage from './pages/MyDrinksPage/MyDrinksPage';

// const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));

function App() {
  // console.log(test);
  return (
    <Layout>
      <Suspense fallback={null}>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<WelcomePage />} />
            {/* <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} /> */}
            <Route path="/home" element={<HomePage />} />
            <Route path="/drinks" element={<DrinksPage />} />
            <Route path="/my" element={<MyDrinksPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AppWrapper>
      </Suspense>
    </Layout>
  );
}
export default App;
