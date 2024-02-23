import { Suspense, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TostBox } from '../reUseComponents/Toast';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import Loader from '../Loader/Loader';
import { selectAuthIsLoggedIn } from '../../redux/auth/authSelectors';
import {
  getCategories,
  getGlasses,
  getIngredients,
} from '../../redux/filters/operations';
import { useFilters } from 'hooks/useFilters';

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
      <Header />
      <Suspense fallback={<Loader isStatic />}>
        <Outlet />
      </Suspense>
      <Footer />
      <TostBox />
    </>
  );
};

export default PrivateSharedLayout;
