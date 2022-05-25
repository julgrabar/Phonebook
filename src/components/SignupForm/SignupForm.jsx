import { StyledForm } from 'components/Contact form/ContactForm.styled';
import { Formik, Field } from 'formik';
import { useDispatch } from 'react-redux';
import { registerQuery } from 'redux/auth/authOperations';
// import { useSignupMutation } from 'redux/authSlice';

export const SignupForm = () => {
  // const [signupUser] = useSignupMutation();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    dispatch(registerQuery(values));
    // signupUser(values);
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
