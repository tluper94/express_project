import React from 'react';
import {
  Form,
  Title,
  Submit,
  BtnContainer,
  FormInputContainer,
} from './AuthForm.styles';

function AuthForm({ style, title, children, onSubmit, changeText }) {
  return (
    <Form style={style} onSubmit={onSubmit}>
      <Title>{title}</Title>
      {children.map((child, idx) => (
        <FormInputContainer key={idx}>{child}</FormInputContainer>
      ))}
      <BtnContainer>
        <Submit>Submit</Submit>
        {changeText}
      </BtnContainer>
    </Form>
  );
}

export default AuthForm;
