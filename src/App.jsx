import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import AddDrinkPage from './pages/AddDrinkPage/AddDrinkPage';

const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/add" element={<AddDrinkPage />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
