import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  width: 40vw;
  border-radius: 10px;
  box-shadow: 1px 1px 16px 5px rgb(235 235 235);
  flex-direction: column;
  padding: 1.25em;
  background-color: rgb(255, 255, 255);
  @media (max-width: 768px;) {
    width: 100%;
  }
`;

export const FormHeader = styled.h2`
  margin: 0;
  font-size: 1rem;
  font-weight: 600;
`;

export const FormInputContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
  flex-direction: column;
`;

export const FormInput = styled.input`
  height: 36px;
  border: 1px solid rgb(205 205 205);
  border-radius: 5px;
  &:focus {
    outline: 2px solid #458fff;
  }
`;

export const FormLabel = styled.label`
  width: 100%;
  margin-right: auto;
  margin-bottom: 5px;
`;
