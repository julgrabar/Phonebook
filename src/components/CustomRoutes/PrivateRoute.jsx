import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogged } from 'redux/auth/authSelectors';

export const PrivateRoute = ({ children }) => {
  const isLogged = useSelector(getIsLogged);
  return isLogged ? children : <Navigate to="/Login" replace={true} />;
};
