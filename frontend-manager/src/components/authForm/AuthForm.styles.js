import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40vw;
  border: 2px solid grey;
  border-radius: 10px;
  padding-bottom: 40px;
  box-shadow: 2px 2px 1px 1px rgb(234, 234, 234);

  @media (max-width: 768px) {
    width: 95vw;
  }
`;

export const Title = styled.h2`
  width: 100%;
  text-align: center;
`;

export const Input = styled.input`
  font-size: 20px;
  border-radius: 5px;
  margin: 1vw 2vw;
  width: 90%;
  height: 50px;
`;

export const Submit = styled.button`
  color: white;
  font-size: 20px;
  width: 85%;
  height: 40px;
  background-color: rgb(0, 184, 104);
  border: 1px solid rgb(0, 184, 104);
  border-radius: 10px;
  cursor: pointer;
`;
