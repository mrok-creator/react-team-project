import { lazy, Suspense } from 'react';
import { Navigate, Routes, Route } from 'react-router-dom';

import Loader from 'shared/components/Loader';
import PrivateRoutes from 'shared/components/Routes/PrivateRoutes/PrivateRoutes';
import PublicRoutes from 'shared/components/Routes/PublicRoutes';

const LayOut = lazy(() => import('components/LayOut'));
const MainPage = lazy(() => import('pages/MainPage'));
const AuthPage = lazy(() => import('pages/AuthPage'));
const TestPage = lazy(() => import('pages/TestPage'));
const ResultPage = lazy(() => import('pages/ResultPage'));
const UsefulInfo = lazy(() => import('pages/MaterialsPage'));
const ContactsPage = lazy(() => import('pages/ContactsPage'));

const NavigationRoutes = () => {
  return (
    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LayOut />}>
            <Route index element={<MainPage />} />
            <Route path="/contacts" element={<ContactsPage />} />

            <Route element={<PublicRoutes />}>
              <Route path="auth" element={<AuthPage />} />
            </Route>
            <Route element={<PrivateRoutes />}>
              <Route path="/test" element={<TestPage />} />
              <Route path="/results" element={<ResultPage />} />
              <Route path="/useful-info" element={<UsefulInfo />} />
            </Route>
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default NavigationRoutes;
