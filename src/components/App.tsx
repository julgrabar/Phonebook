import { Global } from './Global';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { PrivateRoute } from './CustomRoutes/PrivateRoute';
import { PublicRoute } from './CustomRoutes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getIsLogged } from '../redux/auth/authSelectors';
import { lazy, useEffect } from 'react';
import { fetchCurrentUserQuery } from 'redux/auth/authOperations';
import React from 'react';
import { AppDispatch } from 'redux/store';

const RegisterPage = lazy(() => import('views/RegisterView'));
const LoginPage = lazy(() => import('views/LoginView'));
const ContactsPage = lazy(() => import('views/ContactsView'));
const HomePage = lazy(() => import('views/HomeView'));
const NotFoundPage = lazy(() => import('views/NotFoundPage'));

export const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const token = useSelector(getToken);
  const isLogged = useSelector(getIsLogged);

  useEffect(() => {
    if (token && !isLogged) {
      dispatch(fetchCurrentUserQuery(token));
    }
  }, [dispatch, token, isLogged]);

  return (
    <div>
      <Global />

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="signup"
            element={
              <PublicRoute restricted>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
