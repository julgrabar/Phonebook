import { Global } from './Global';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { HomePage } from 'views/HomeView';
import { LoginPage } from 'views/LoginView';
import { RegisterPage } from 'views/RegisterView';
import { ContactsPage } from 'views/ContactsView';
import { NotFoundPage } from 'views/NotFoundPage';
import { PrivateRoute } from './CustomRoutes/PrivateRoute';
import { PublicRoute } from './CustomRoutes/PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { getToken, getIsLogged } from '../redux/auth/authSelectors';
import { useEffect } from 'react';
import { fetchCurrentUserQuery } from 'redux/auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();
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
