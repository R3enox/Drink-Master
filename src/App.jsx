import { lazy } from 'react';
import {  NavLink, Route, Routes } from 'react-router-dom';
// import { AppWrapper } from './App.styled';
// import DrinkPage from './pages/DrinkPage/DrinkPage';

const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));
const DrinkPage = lazy(() => import('./pages/DrinkPage/DrinkPage'));

function App() {
  console.log(test);
  return (
    <>
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

      <NavLink to="/drink/:drinkId" ></NavLink>

      <Routes>
        <Route path="/drink/:drinkId" element={<DrinkPage />} />
      </Routes>
    </>
  );
}
export default App;
