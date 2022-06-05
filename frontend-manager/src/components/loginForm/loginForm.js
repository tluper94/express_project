import { useState } from 'react';
import AuthForm from '../authForm/AuthForm';
import { Input } from '../authForm/AuthForm.styles';
import { Login } from './loginForm.styles';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onEmailChange(e) {
    setEmail(e.target.value);
  }
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, password: password }),
      });

      if (res.status !== 200) {
        const err = await res.json();
        throw new Error(err.message);
      } else {
        const data = await res.json();
        console.log(data);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Login>
        <AuthForm title='Have An Account?' onSubmit={onSubmit}>
          <Input
            required
            type='email'
            name='Email'
            placeholder='Email'
            value={email}
            onChange={onEmailChange}
          />
          <Input
            required
            type='password'
            name='createPassword'
            placeholder='password'
            value={password}
            onChange={onPasswordChange}
          />
        </AuthForm>
      </Login>
    </>
  );
}

export default LoginForm;
