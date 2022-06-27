import React, { useEffect } from 'react';
import LogoutContent from 'components/authentication/LogoutContent';

import { useSelector, useDispatch } from 'react-redux';
import { logout } from 'features/auth/authSlice';

import AuthCardLayout from 'layouts/AuthCardLayout';

const Logout = () => {
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    state => state.auth
  );

  useEffect(() => {
    if (user) {
      dispatch(logout());
    }

    console.log(user);
  });
  return (
    <AuthCardLayout>
      <div className="text-center">
        <LogoutContent layout="card" titleTag="h3" />
      </div>
    </AuthCardLayout>
  );
};

export default Logout;
