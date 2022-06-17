import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operation';

import LayOut from 'components/LayOut';
import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage';
import TestPage from './pages/TestPage';

import MaterialsPage from 'pages/MaterialsPage';
import ResultPage from 'pages/ResultPage';
export const App = () => {
  const dispatch = useDispatch(); useEffect(() => { dispatch(getCurrentUser()); }, [dispatch]);

  return (
    <>
      <LayOut />
      <AuthPage />
      <MainPage />
      <TestPage />
      <MaterialsPage />
      <ResultPage />
    </>
  );
};
