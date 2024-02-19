import { Outlet } from 'react-router-dom';
import { Footer } from '../Footer/Footer';

const SharedLayout = () => {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};

export default SharedLayout;
