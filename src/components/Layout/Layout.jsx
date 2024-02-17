import { Footer } from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <>
      <main>{children}</main>
      <Footer />;
    </>
  );
};

export default Layout;
