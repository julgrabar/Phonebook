import { Container } from 'components/Global';
import React from 'react';
import { Bar } from './AppBar.styled';
import { Navigation } from './NavBar';

export const AppBar = () => {
  return (
    <Bar>
      <Container>
        <Navigation />
      </Container>
    </Bar>
  );
};
