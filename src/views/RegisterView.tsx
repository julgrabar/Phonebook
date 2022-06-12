import { StyledForm } from 'components/Contact form/ContactForm.styled';
import { Formik, Field, FormikHelpers } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerQuery } from 'redux/auth/authOperations';
import { AppDispatch } from 'redux/store';
import { ISignUpData } from 'types/types';


const RegisterPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const initialValues:ISignUpData = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values:ISignUpData, { resetForm }:FormikHelpers<ISignUpData>) => {
    dispatch(registerQuery(values));
    resetForm();
  };

  return (
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
      <StyledForm>
        <label>
          <p>User Name</p>
          <Field type="text" name="name" required />
        </label>

        <label>
          <p>e-mail</p>
          <Field type="email" name="email" required />
        </label>

        <label>
          <p>Password</p>
          <Field type="password" name="password" required />
        </label>
        <button type="submit">Sign up</button>
      </StyledForm>
    </Formik>
  );
};

export default RegisterPage;
