import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import HomePage from './pages/HomePage/HomePage';
import DrinksPage from './pages/DrinksPage/DrinksPage';
import Layout from './components/Layout/Layout';

const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Layout>
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/drinks" element={<DrinksPage />} />
        </Routes>
      </Layout>
    </AppWrapper>
  );
}
export default App;
