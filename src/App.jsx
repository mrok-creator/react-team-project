import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operation';

import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';

import MaterialsPage from 'pages/MaterialsPage';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AuthPage />
      <MainPage />
      <TestPage />
      <MaterialsPage />
    </>
  );
};
