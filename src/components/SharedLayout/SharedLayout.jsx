import { Outlet } from 'react-router-dom';
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

const SharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const { categories, ingredients, glasses } = useFilters();

  useEffect(() => {
    if (!isLoggedIn) return;

    if (!categories) dispatch(getCategories());
    if (!ingredients) dispatch(getIngredients());
    if (!glasses) dispatch(getGlasses());

    console.log('USE EFFECT');
  }, [isLoggedIn, categories, ingredients, glasses, dispatch]);
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;