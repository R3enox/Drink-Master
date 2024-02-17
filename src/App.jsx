import { Navigate, Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Layout from './components/Layout/Layout';
import { Suspense } from 'react';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';
import HomePage from './pages/HomePage/HomePage';
import DrinksPage from './pages/DrinksPage/DrinksPage';

const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));

function App() {
  console.log(test);
  return (
    <Layout>
      <Suspense fallback={null}>
        <AppWrapper>
          <Routes>
            <Route path="/" element={<Navigate to="/welcome" />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/drinks" element={<DrinksPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AppWrapper>
      </Suspense>
    </Layout>
  );
}
export default App;
