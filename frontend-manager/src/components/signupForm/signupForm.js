import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import AuthForm from '../authForm/AuthForm';
import { Input } from '../authForm/AuthForm.styles';
import { LoginBtn } from './signupForm.styles';

function SignupForm({ setUser, onLoginClick }) {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onNameChange(e) {
    setName(e.target.value);
  }
  function onUsernameChange(e) {
    setUsername(e.target.value);
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

    try {
      const res = await axios.post('http://localhost:8000/signup', {
        name,
        username,
        email,
        password,
      });
      console.log(res);
      setUser(res.data);
      navigate('/');
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
  }

  return (
    <>
      <AuthForm
        title='Create An Account'
        onSubmit={onSignupSubmit}
        changeText={
          <LoginBtn onClick={onLoginClick}>Have An Account?</LoginBtn>
        }
      >
        <Input
          required
          type='text'
          name='name'
          placeholder='Name'
          value={name}
          onChange={onNameChange}
        />
        <Input
          required
          type='text'
          name='username'
          placeholder='Username'
          value={username}
          onChange={onUsernameChange}
        />
        <Input
          required
          type='email'
          name='email'
          placeholder='Email'
          value={email}
          onChange={onEmailChange}
        />
        <Input
          required
          type='password'
          name='password'
          placeholder='password'
          value={password}
          onChange={onPasswordChange}
        />
      </AuthForm>
    </>
  );
}

export default SignupForm;
