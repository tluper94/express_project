import React, { useEffect, useState } from 'react';
import LoginForm from '../../components/loginForm/loginForm';
import SignupForm from '../../components/signupForm/signupForm';
import { AuthContainer } from './Auth.styles';
import { useNavigate } from 'react-router-dom';

function Auth({ user, setUser }) {
  const navigate = useNavigate();
  const [createAccount, setCreateAccount] = useState(false);

  function onClickHandler() {
    setCreateAccount((prevstate) => !prevstate);
  }

  useEffect(() => {
    user && navigate('/');
  }, [user, navigate]);

  return (
    <AuthContainer>
      {createAccount ? (
        <SignupForm onLoginClick={onClickHandler} setUser={setUser} />
      ) : (
        <LoginForm onCreateAccountClick={onClickHandler} setUser={setUser} />
      )}
    </AuthContainer>
  );
}

export default Auth;
