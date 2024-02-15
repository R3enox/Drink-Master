import { Route, Routes } from 'react-router-dom';
import { AppWrapper } from './App.styled';
import { HomePage } from './pages/HomePage/HomePage';

const test = import.meta.env.VITE_API_TEST;

// const WelcomePage = lazy(() => import('./pages/WelcomePage/WelcomePage'));

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
      </Routes>
    </AppWrapper>
  );
}
export default App;
