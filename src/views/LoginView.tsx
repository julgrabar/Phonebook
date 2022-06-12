import { StyledForm } from 'components/Contact form/ContactForm.styled';
import { Formik, Field, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginQuery } from 'redux/auth/authOperations';
import { AppDispatch } from 'redux/store';
import { ILoginData } from 'types/types';

const LoginPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const initialValues:ILoginData = {
    email: '',
    password: '',
  };

  const handleSubmit = (values:ILoginData, { resetForm }:FormikHelpers<ILoginData>) => {
    dispatch(loginQuery(values));
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <StyledForm>
        <label>
          <p>e-mail</p>
          <Field type="email" name="email" required />
        </label>

        <label>
          <p>Password</p>
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Log in</button>
      </StyledForm>
    </Formik>
  );
};

export default LoginPage;
