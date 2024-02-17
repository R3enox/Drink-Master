import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

import { HeaderRender } from '../Header/HeaderReander/HeaderRender';

export const Layout = () => {
  return (
    <>
      <HeaderRender />

      <Outlet fallback={null} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
