import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operation';
import AuthPage from './pages/AuthPage/AuthPage';
import TestPage from './pages/TestPage';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AuthPage />
      <TestPage />
    </>
  );
};
