import { Suspense } from 'react';
import { Footer } from '../Footer/Footer';

const Layout = ({ children }) => {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="mx-auto">
        {children}
        <Footer />
      </div>
    </Suspense>
  );
};

export default Layout;
