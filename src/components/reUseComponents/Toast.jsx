import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const TostBox = () => {
  return (
    <ToastContainer
      icon={true}
      position="top-right"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
};
