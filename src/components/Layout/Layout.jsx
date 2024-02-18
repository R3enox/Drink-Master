import { Footer } from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className="mx-auto">
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
