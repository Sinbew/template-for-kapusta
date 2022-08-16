import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getToken } from 'redux/auth/auth-selectors';

export const PublicRoute = ({ children }) => {
  const accessToken = useSelector(getToken);
  return accessToken ? <Navigate to="/contacts" /> : children;
};
