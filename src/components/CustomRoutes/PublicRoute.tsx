import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { getIsLogged } from 'redux/auth/authSelectors';

interface IProps {
  children: ReactElement,
  restricted: boolean
}

export const PublicRoute = ({ children, restricted }: IProps) => {
  const isLogged = useSelector(getIsLogged);
  return isLogged && restricted ? (
    <Navigate to="/contacts" replace={true} />
  ) : (
    children
  );
};
