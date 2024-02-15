import {  Routes } from 'react-router-dom';
// import { AppWrapper } from './App.styled';
import DrinkPage from './pages/DrinkPage/DrinkPage';

const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));

function App() {
  console.log(test);
  return (
    <>
      {/* <AppWrapper> */}
        <DrinkPage />
        <Routes>
        </Routes>
      {/* </AppWrapper> */}
    </>
  );
}
export default App;
