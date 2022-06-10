import React from 'react';
import { Form, Title, Submit } from './AuthForm.styles';

function AuthForm({ style, title, children, onSubmit, changeText }) {
  return (
    <Form style={style} onSubmit={onSubmit}>
      <Title>{title}</Title>
      {children}
      <Submit>Submit</Submit>
      {changeText}
    </Form>
  );
}

export default AuthForm;
