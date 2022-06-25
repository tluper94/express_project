import styled from 'styled-components';

export const StoresContainer = styled.div`
  display: flex;
  width: 85%;
  border-radius: 10px;
  /* box-shadow: 1px 1px 16px 5px rgb(235 235 235); */
  flex-direction: column;
  padding: 1.25em;
  background-color: rgb(255, 255, 255);
  margin-top: 50px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BackButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  align-items: center;
  margin-bottom: 10px;
`;

export const LoadingConatiner = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.h3`
  color: ${(props) => props.color || '#698ea7'};
  font-size: ${(props) => props.size || '20px'};
  margin: ${(props) => props.margin || '0px'};
`;

export const AddStoreSection = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;

export const FirstTimeStoreConatiner = styled.section`
  display: flex;
  flex-direction: column;
  padding: 15px;
  justify-content: center;
  align-items: center;
  border: 2px dashed grey;
`;

export const StepOneConatiner = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 2px dashed grey;
`;

export const StoreText = styled.p`
  margin: 0;
  margin-top: ${(props) => props.marginTop};
  color: ${(props) => props.color || 'grey'};
`;
