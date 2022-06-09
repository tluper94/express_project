import { useState } from 'react';
import axios from 'axios';
import AuthForm from '../authForm/AuthForm';
import { Input } from '../authForm/AuthForm.styles';

function LoginForm({ setUser }) {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  function onUsernameChange(e) {
    setUserName(e.target.value);
  }
  function onPasswordChange(e) {
    setPassword(e.target.value);
  }

  async function onSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:8000/login', {
        username: username,
        password: password,
      });
      setUser(res.data);
    } catch (err) {
      alert('Invalid Creditials');
    }
  }
  return (
    <>
      <AuthForm
        style={{ marginTop: '20px' }}
        title='Have An Account?'
        onSubmit={onSubmit}
      >
        <Input
          required
          type='username'
          name='Username'
          placeholder='Username'
          value={username}
          onChange={onUsernameChange}
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

export default LoginForm;
