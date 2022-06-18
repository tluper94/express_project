import styled from 'styled-components';

export const Table = styled.table`
  width: 95%;
  table-layout: fixed;
  border-spacing: 0;
  border: 2px solid #eff0f0;
  border-radius: 5px;
`;

export const TableInput = styled.input`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

export const TableRow = styled.tr`
  background-color: ${(props) => props.backgroundColor};
  height: ${(props) => props.height};
`;
export const TableData = styled.td`
  text-align: center;
`;
export const TableHeader = styled.th`
  color: #2c3338;
  font-weight: 600;
  width: ${(props) => props.width};
`;

export const TableBody = styled.tbody`
  & tr {
    &:nth-child(odd) {
      background-color: #f6f7f7;
    }

    &:hover {
      background-color: #eef6fd;
    }
  }
`;
