import { useState } from 'react';
import './App.css';

import AuthForm from './components/authForm/AuthForm';
import { Input } from './components/authForm/AuthForm.styles';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onNameChange(e) {
    setName(e.target.value);
  }
  function onEmailChange(e) {
    setEmail(e.target.value);
  }
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  function onLoginEmailChange(e) {
    setLoginEmail(e.target.value);
  }
  function onLoginPasswordChange(e) {
    setLoginPassword(e.target.value);
  }

  async function onSignupSubmit(e) {
    e.preventDefault();
    if (password.length < 7) {
      return;
    }
    const res = await fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    const data = await res.json();

    console.log(data);
  }

  async function onLoginSubmit(e) {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: loginEmail, password: loginPassword }),
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
    <div className='App'>
      <div className='auth'>
        <AuthForm title='Create An Account' onSubmit={onSignupSubmit}>
          <Input
            required
            type='text'
            name='createName'
            placeholder='Name'
            value={name}
            onChange={onNameChange}
          />
          <Input
            required
            type='email'
            name='createEmail'
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
        <div className='login'>
          <AuthForm title='Have An Account?' onSubmit={onLoginSubmit}>
            <Input
              required
              type='email'
              name='Email'
              placeholder='Email'
              value={loginEmail}
              onChange={onLoginEmailChange}
            />
            <Input
              required
              type='password'
              name='createPassword'
              placeholder='password'
              value={loginPassword}
              onChange={onLoginPasswordChange}
            />
          </AuthForm>
        </div>
      </div>
    </div>
  );
}

export default App;
