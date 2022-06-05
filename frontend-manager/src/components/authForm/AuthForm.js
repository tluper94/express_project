import React from 'react';
import { Form, Title, Submit } from './AuthForm.styles';

function AuthForm({ style, title, children, onSubmit }) {
  return (
    <Form style={style} onSubmit={onSubmit}>
      <Title>{title}</Title>
      {children}
      <Submit>Submit</Submit>
    </Form>
  );
}

export default AuthForm;
