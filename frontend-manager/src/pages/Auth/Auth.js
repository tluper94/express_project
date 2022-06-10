import React, { useState } from 'react';
import LoginForm from '../../components/loginForm/loginForm';
import SignupForm from '../../components/signupForm/signupForm';
import { AuthContainer } from './Auth.styles';

function Auth({ setUser }) {
  const [createAccount, setCreateAccount] = useState(false);

  function onClickHandler() {
    setCreateAccount((prevstate) => !prevstate);
  }

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
