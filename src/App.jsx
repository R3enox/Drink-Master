import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import { HomePage } from './pages/HomePage/HomePage';

const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));

function App() {
  console.log(test);
  return (
    <AppWrapper>
      <Routes>
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </AppWrapper>
  );
}
export default App;
