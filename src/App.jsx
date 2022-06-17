import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from './redux/auth/auth-operation';

import AuthPage from './pages/AuthPage/AuthPage';
import MainPage from './pages/MainPage';
import MaterialsPage from 'pages/MaterialsPage';
import ContactsPage from 'pages/ContactsPage';
import contacts from './pages/ContactsPage/dataContacts.json';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);
  return (
    <>
      <AuthPage />
      <MainPage />
      <MaterialsPage />
      <ContactsPage contacts={contacts} />
    </>
  );
};
