import { StyledForm } from 'components/Contact form/ContactForm.styled';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { loginQuery } from 'redux/auth/authOperations';

const LoginPage = () => {
  const dispatch = useDispatch();
  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
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
