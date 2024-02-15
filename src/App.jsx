import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import HomePage from './pages/HomePage/HomePage';
import DrinksPage from './pages/DrinksPage/DrinksPage';

const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
// const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
// const DrinksPage = lazy(() => import('./pages/DrinksPage/DrinksPage'));

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <ul className="flex gap-5">
        <li>
          <h1 className="text-2xl text-primary-text-color">Hello</h1>
        </li>
        <li>
          <p className="text-2xl text-primary-text-color sm:text-8xl">
            The quick brown fox...
          </p>
        </li>
      </ul>

      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/drinks" element={<DrinksPage />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
