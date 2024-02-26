import { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setTokens } from '../../redux/auth/authReducer';
import { fetchCurrentThunk } from '../../redux/auth/authOperations';

const GoogleAuthPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const accessToken = searchParams.get('accessToken');
  const refreshToken = searchParams.get('refreshToken');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setTokens({ accessToken, refreshToken }));
    dispatch(fetchCurrentThunk());
    navigate('/home');
  }, [accessToken, refreshToken, dispatch, navigate]);
};

export default GoogleAuthPage;
