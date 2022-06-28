import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import PropType from 'prop-types';

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

ProtectedRoutes.propTypes = {
  user: PropType.object,
  redirectPath: PropType.string,
  children: PropType.node
};

export default ProtectedRoutes;
