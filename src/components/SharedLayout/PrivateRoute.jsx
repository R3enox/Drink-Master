import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const PrivateRoute = ({ component, redirectTo = '/welcome' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
