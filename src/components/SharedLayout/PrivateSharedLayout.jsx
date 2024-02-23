import { Suspense, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TostBox } from '../reUseComponents/Toast';

import { Footer } from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import {
  getCategories,
  getGlasses,
  getIngredients,
} from '../../redux/filters/operations';
import { useFilters } from 'hooks/useFilters';

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

const PrivateSharedLayout = () => {
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
      <Suspense fallback={<Loader isStatic />}>
        <Outlet />
      </Suspense>
      <Footer />
      <TostBox />
    </>
  );
};

export default PrivateSharedLayout;
