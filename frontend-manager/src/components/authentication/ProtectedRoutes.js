import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = ({
  user,
  redirectPath = '/authentication/card/login',
  children
}) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoutes;
