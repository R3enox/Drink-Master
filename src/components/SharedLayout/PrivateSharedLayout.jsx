import { Suspense, useEffect, useState } from 'react';
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
import { MotivatingModal } from '../reUseComponents/MotivatingModal/MotivatingModal';
import { useModal } from '../../hooks/useModal';
import API from 'services/axios';

const PrivateSharedLayout = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const { categories, ingredients, glasses } = useFilters();
  const { isOpen, toggleModal } = useModal();
  const [achievement, setAchievement] = useState(null);

  useEffect(() => {
    if (!isLoggedIn) return;

    if (!categories) dispatch(getCategories());
    if (!ingredients) dispatch(getIngredients());
    if (!glasses) dispatch(getGlasses());
  }, [isLoggedIn, categories, ingredients, glasses, dispatch]);

  useEffect(() => {
    const checkAcktivity = async () => {
      const { data } = await API.get('/users/achievements/activity');
      if (data) {
        setAchievement(data);
        toggleModal();
      }
    };

    if (!isLoggedIn) return;

    console.log('USE EFFECT');
    checkAcktivity();
  }, [isLoggedIn, toggleModal]);

  console.log('MOUNTING');
  console.log('achievement', achievement);
  console.log('isOpen:', isOpen);

  return (
    <>
      <Header />
      <Suspense fallback={<Loader isStatic />}>
        <Outlet />
      </Suspense>
      <Footer />
      {achievement && isOpen && (
        <MotivatingModal
          achievementText={achievement.message}
          classNamesKey={achievement.classNamesKey}
          onClose={toggleModal}
        />
      )}
      <TostBox />
    </>
  );
};

export default PrivateSharedLayout;
