import styled from 'styled-components';

export const Btn = styled.button`
  width: ${(props) => props.width || '85%'};
  height: ${(props) => props.height || '40px'};
  background-color: ${(props) => props.color || 'rgb(0, 184, 104)'};
  color: ${(props) => props.fontColor || 'white'};
  border-radius: ${(props) => props.borderRadius || '10px'};
  border: none;
  margin: ${(props) => props.margin || 0};
  cursor: pointer;
`;
