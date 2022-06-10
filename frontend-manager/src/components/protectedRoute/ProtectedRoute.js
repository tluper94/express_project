import { Outlet, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ user, redirectPath = '/auth' }) => {
  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
