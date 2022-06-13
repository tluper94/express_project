import { useState } from 'react';
import axios from 'axios';
import Form from '../form/Form';
import { FormInput, Btn, BtnContainer } from '../form/Form.styles';
import { CreateAccountBtn } from './loginForm.styles';
import { useNavigate } from 'react-router-dom';

function LoginForm({ setUser, onCreateAccountClick }) {
  const navigate = useNavigate();
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
      navigate('/');
    } catch (err) {
      alert('Invalid Creditials');
    }
  }
  return (
    <>
      <Form style={{ marginTop: '20px' }} title='Sign In' onSubmit={onSubmit}>
        <FormInput
          required
          type='username'
          name='Username'
          placeholder='Username'
          value={username}
          onChange={onUsernameChange}
        />
        <FormInput
          required
          type='password'
          name='createPassword'
          placeholder='password'
          value={password}
          onChange={onPasswordChange}
        />
        <BtnContainer>
          <Btn>Submit</Btn>
        </BtnContainer>
        <CreateAccountBtn onClick={onCreateAccountClick}>
          Need An Account?
        </CreateAccountBtn>
      </Form>
    </>
  );
}

export default LoginForm;
