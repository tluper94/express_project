import React from 'react';
import { Form, Title, Submit } from './AuthForm.styles';

function AuthForm({ title, children, onSubmit }) {
  return (
    <Form onSubmit={onSubmit}>
      <Title>{title}</Title>
      {children}
      <Submit>Submit</Submit>
    </Form>
  );
}

export default AuthForm;
