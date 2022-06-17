import { Navigate, Outlet } from 'react-router-dom';

import useLogin from 'shared/hooks/useLogin';

const PrivateRoutes = () => {
  const isLogin = useLogin();
  if (!isLogin) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

export default PrivateRoutes;
