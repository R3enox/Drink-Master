import { useSelector } from 'react-redux';
import {
  selectAuthIsLoggedIn,
  selectAuthIsRefreshing,
} from '../redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectAuthIsLoggedIn);
  const isRefreshing = useSelector(selectAuthIsRefreshing);

  return { isLoggedIn, isRefreshing };
};
