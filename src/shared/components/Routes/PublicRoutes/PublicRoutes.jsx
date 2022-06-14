import { Navigate, Outlet } from 'react-router-dom';

import useLogin from 'shared/hooks/useLogin';

const PublicRoutes = () => {
  const isLogin = useLogin();

  if (isLogin) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default PublicRoutes;
