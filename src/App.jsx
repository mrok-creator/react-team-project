import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operation';

import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage';
import MaterialsPage from 'pages/MaterialsPage';
import ResultPage from 'pages/ResultPage';
export const App = () => {
  return (
    <>
      <AuthPage />
      <MainPage />
      <MaterialsPage />
      <ResultPage />
    </>
  );
};
