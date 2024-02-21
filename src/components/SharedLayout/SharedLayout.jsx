import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useFilters } from 'hooks/useFilters';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import {
  getCategories,
  getGlasses,
  getIngredients,
} from '../../redux/filters/operations';
import { useEffect } from 'react';

const HeaderDemoNav = () => {
  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/drinks">Drinks</NavLink>
          </li>
          <li>
            <NavLink to="/add">Add drink</NavLink>
          </li>
          <li>
            <NavLink to="/my">My drinks</NavLink>
          </li>
          <li>
            <NavLink to="favorites">Favorites</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

const SharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const { categories, ingredients, glasses } = useFilters();

  useEffect(() => {
    if (!isLoggedIn) return;

    if (!categories) dispatch(getCategories());
    if (!ingredients) dispatch(getIngredients());
    if (!glasses) dispatch(getGlasses());
  }, [isLoggedIn, categories, ingredients, glasses, dispatch]);
  return (
    <>
      <HeaderDemoNav />
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
