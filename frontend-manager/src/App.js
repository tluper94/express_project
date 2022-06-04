import { useState } from 'react';
import './App.css';

import AuthForm from './components/authForm/AuthForm';
import { Input } from './components/authForm/AuthForm.styles';

function App() {
  const [createName, setCreateName] = useState('');
  const [createEmail, setCreateEmail] = useState('');
  const [createPassword, setCreatePassword] = useState('');

  function onNameChange(e) {
    setCreateName(e.target.value);
  }
  function onEmailChange(e) {
    setCreateEmail(e.target.value);
  }
  function onPasswordChange(e) {
    setCreatePassword(e.target.value);
  }

  async function onSignupSubmit(e) {
    e.preventDefault();
    if (createPassword.length < 7) {
      return;
    }
    const res = await fetch('http://localhost:8000/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: createName,
        email: createEmail,
        password: createPassword,
      }),
    });
    const data = await res.json();

    console.log(data);
  }

  console.log(createName, createEmail, createPassword);

  return (
    <div className='App'>
      <AuthForm title='Create An Account' onSubmit={onSignupSubmit}>
        <Input
          required
          type='text'
          name='createName'
          placeholder='Name'
          value={createName}
          onChange={onNameChange}
        />
        <Input
          required
          type='email'
          name='createEmail'
          placeholder='Email'
          value={createEmail}
          onChange={onEmailChange}
        />
        <Input
          required
          type='password'
          name='createPassword'
          placeholder='password'
          value={createPassword}
          onChange={onPasswordChange}
        />
      </AuthForm>
    </div>
  );
}

export default App;
