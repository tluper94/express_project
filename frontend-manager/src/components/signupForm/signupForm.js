import { useState } from 'react';
import AuthForm from '../authForm/AuthForm';
import { Input } from '../authForm/AuthForm.styles';

function SignupForm() {
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

  return (
    <>
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
    </>
  );
}

export default SignupForm;