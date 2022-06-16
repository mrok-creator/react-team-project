import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operation';
import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage';
export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AuthPage />
      <MainPage />
    </>
  );
};
