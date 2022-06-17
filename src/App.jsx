import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operation';

import LayOut from 'components/LayOut';
import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage';
import MaterialsPage from 'pages/MaterialsPage';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>

      <LayOut></LayOut>
    </>
  );
};
