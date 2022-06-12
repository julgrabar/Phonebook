import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogged } from 'redux/auth/authSelectors';
interface IProps {
  children: ReactElement
}
export const PrivateRoute = ({ children }:IProps) => {
  const isLogged = useSelector(getIsLogged);
  return isLogged ? children : <Navigate to="/Login" replace={true} />;
};
