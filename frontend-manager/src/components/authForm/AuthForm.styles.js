import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 40vw;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  padding: 1.25rem;
  box-shadow: 1px 1px 16px 5px rgb(235 235 235);

  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

export const FormInputContainer = styled.div`
  display: flex;
  margin-top: 1.25rem;
  flex-direction: column;
`;

export const Input = styled.input`
  font-size: 20px;
  border-radius: 5px;
  border: 1px solid rgb(205 205 205);
  height: 36px;
  &:focus {
    outline: 2px solid #458fff;
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
  flex-direction: column;
`;

export const Submit = styled.button`
  color: white;
  width: 85%;
  height: 40px;
  background-color: rgb(0, 184, 104);
  border: 1px solid rgb(0, 184, 104);
  border-radius: 10px;
  cursor: pointer;
`;
