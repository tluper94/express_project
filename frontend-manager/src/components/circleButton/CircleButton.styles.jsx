import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const DropDownConatainer = styled.div`
  position: relative;
`;

export const DropDownLabelContainer = styled.div`
  display: none;
  position: absolute;
  min-height: fit-content;
  max-width: 200px;
  left: 50%;
  text-align: center;
  margin-top: 6px;
  margin-left: ${(props) => `calc(${props.width}px / 2 * -1)`};
  color: #ffffff;
  border-radius: 5px;
  padding: 0.618em 1em;
  font-size: 0.7em;
  background-color: #333333;
  white-space: nowrap;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    top: -6px;
    left: 50%;
    margin-left: -6px;
    border-style: solid;
    border-width: 0px 6px 6px 6px;
    border-color: transparent transparent #333333 transparent;
  }
`;

export const CircleButtonContainer = styled.button`
  outline: none;
  border: none;
  position: relative;
  text-align: center;
  margin-right: 10px;
  margin-bottom: 5px;
  width: ${(props) => props.width || '35px'};
  height: ${(props) => props.height || '35px'};
  border-radius: 50%;
  background-color: #ffffff;
  box-shadow: 0px 2px 7px #7a7a7a;
  cursor: pointer;
`;
