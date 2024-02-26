import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import RestrictedSharedLayout from '../components/SharedLayout/RestrictedSharedLayout';

const WelcomePage = lazy(() => import('pages/WelcomePage/WelcomePage'));
const SignUpPage = lazy(() => import('pages/SignUpPage/SignUpPage'));
const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const GoogleAuthPage = lazy(() =>
  import('pages/GoogleAuthPage/GoogleAuthPage')
);

const RestrictedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<RestrictedSharedLayout />}>
        <Route index element={<Navigate to="/welcome" />} />
        <Route path="welcome" element={<WelcomePage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route path="google" element={<GoogleAuthPage />} />
        <Route path="*" element={<Navigate to="/welcome" />} />
      </Route>
    </Routes>
  );
};

export default RestrictedRoutes;
