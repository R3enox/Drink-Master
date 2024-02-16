// import { lazy } from 'react';
import {  Link, Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import DrinkPage from './pages/DrinkPage/DrinkPage';

const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
// const DrinkPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));

const drinkId = "123" // временный айдишник коктейля
function App() {
  console.log(test);
  return (
    <AppWrapper>
      <ul className="flex gap-5 container">
        <li>
          <h1 className="text-2xl text-primary-text-color">Hello</h1>
        </li>
        <li>
          <p className="text-2xl text-primary-text-color sm:text-8xl">
            The quick brown fox...
          </p>
        </li>
      </ul>

      <Link  to={`/drink/${drinkId}`} >Это будет карточка коктейля</Link>

      <Routes>
        <Route path="/drink/:drinkId" element={<DrinkPage />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
