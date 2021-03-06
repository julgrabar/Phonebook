import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getUser, getIsLogged } from 'redux/auth/authSelectors';

const HomePage = () => {
  const isLogged = useSelector(getIsLogged);
  const { name } = useSelector(getUser);
  return (
    <>
      <h1>Welcome to Phonebook</h1>
      {isLogged ? (
        <p>{`You are logged in as ${name}`}</p>
      ) : (
        <p>
          To use Phonebook <NavLink to="/signup">create an account</NavLink> or{' '}
          <NavLink to="/login">log in</NavLink>
        </p>
      )}
    </>
  );
};

export default HomePage;
