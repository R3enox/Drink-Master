import { Footer } from '../Footer/Footer';
import { HeaderRender } from '../Header/HeaderReander/HeaderRender';

const Layout = ({ children }) => {
  return (
    <>
      <HeaderRender/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
