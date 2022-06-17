import styled from 'styled-components';

export const Table = styled.table`
  width: '95%';
  border: 1px solid grey;
`;
export const TableRow = styled.tr`
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
`;
export const TableData = styled.td`
  text-align: center;
`;
export const TableHeader = styled.th``;
