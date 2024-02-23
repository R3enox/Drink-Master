import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { TostBox } from '../reUseComponents/Toast';

import Loader from '../Loader/Loader';

const RestrictedSharedLayout = () => {
  return (
    <div className="restricted-page-container">
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <TostBox />
    </div>
  );
};

export default RestrictedSharedLayout;
