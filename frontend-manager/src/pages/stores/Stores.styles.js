import styled from 'styled-components';

export const StoresContainer = styled.div`
  display: flex;
  width: 85%;
  border-radius: 10px;
  box-shadow: 1px 1px 16px 5px rgb(235 235 235);
  flex-direction: column;
  padding: 1.25em;
  background-color: rgb(255, 255, 255);
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const Label = styled.h3`
  color: ${(props) => props.color || '#698ea7'};
  font-size: ${(props) => props.size || '20px'};
  margin-right: ${(props) => props.marginR || '15px'};
`;

export const AddStoreSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
