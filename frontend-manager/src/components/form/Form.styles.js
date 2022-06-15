import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  width: 40vw;
  border-radius: 10px;
  box-shadow: 1px 1px 16px 5px rgb(235 235 235);
  flex-direction: column;
  padding: 1.25em;
  background-color: rgb(255, 255, 255);
  @media (max-width: 768px) {
    width: 95%;
  }
`;

export const FormHeader = styled.h2`
  margin: 0;
  width: 100%;
  text-align: center;
  font-size: ${(props) => props.fontSize || '2rem'};
  font-weight: 400;
`;

export const FormSection = styled.section`
  display: flex;
  margin-top: 1.25rem;
  flex-direction: ${(props) => props.direction || 'column'};
  align-items: ${(props) => props.itemAlign};
  justify-content: ${(props) => props.justify};
`;

export const FormInput = styled.input`
  height: 36px;
  width: ${(props) => props.width};
  border: 1px solid rgb(205 205 205);
  border-radius: 5px;
  font-size: 18px;
  &:focus {
    outline: 2px solid #458fff;
  }
`;

export const FormLabel = styled.label`
  color: ${(props) => props.color};
  width: ${(props) => props.width || '100%'};
  margin: ${(props) => props.margin};
`;

export const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Btn = styled.button`
  color: white;
  width: 85%;
  height: 40px;
  background-color: rgb(0, 184, 104);
  border: 1px solid rgb(0, 184, 104);
  border-radius: 10px;
  cursor: pointer;
`;
