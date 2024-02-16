import { Navigate, Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import WelcomePage from './pages/WelcomePage/WelcomePage';
import ErrorPage from 'pages/ErrorPage/ErrorPage';
import Layout from './components/Layout/Layout';
import { Suspense } from 'react';
import SigninPage from './pages/SigninPage/SigninPage';
import SignupPage from './pages/SignupPage/SignupPage';

const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));

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
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </AppWrapper>
      </Suspense>
    </Layout>
  );
}
export default App;
