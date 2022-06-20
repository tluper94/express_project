import styled from 'styled-components';

export const CircleButtonContainer = styled.span`
  display: inline-block;
  position: relative;
  vertical-align: middle;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 5px;
  width: ${(props) => props.width || '35px'};
  height: ${(props) => props.height || '35px'};
  border-radius: 50%;
  background-color: '#ffffff';
  box-shadow: 0px 2px 7px #7a7a7a;
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const DropDownLabelContainer = styled.div`
  color: #ffffff;
  position: absolute;
  font-size: 12px;
  background-color: #222222;
`;
