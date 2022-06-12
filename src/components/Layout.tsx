import React from 'react';
import { Suspense } from 'react';
import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Container } from './Global';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Container>
        <Suspense>
          <Outlet />
        </Suspense>
        <Toaster />
      </Container>
    </>
  );
};
