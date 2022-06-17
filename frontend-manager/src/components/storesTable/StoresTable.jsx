import { Table, TableData, TableHeader, TableRow } from '../table/table';

function StoresTable({ stores }) {
  const displayArrayOfTableData = (array) => {
    return array.map((value) => {
      return <TableData>{value.name}</TableData>;
    });
  };
  return (
    <Table>
      <tbody>
        <TableRow height='3rem'>
          <TableHeader>Store Name</TableHeader>
          <TableHeader>Employees</TableHeader>
          <TableHeader>Registers</TableHeader>
          <TableHeader>Enabled</TableHeader>
        </TableRow>
        {stores.map((store, id) => {
          let backgroundColor;
          if (id % 2 !== 1) {
            backgroundColor = '#f1f6fc';
          } else backgroundColor = 'white';
          return (
            <TableRow height={'8rem'} backgroundColor={backgroundColor}>
              <TableData>{store.storeName}</TableData>
              {displayArrayOfTableData(store.employees)}
            </TableRow>
          );
        })}
      </tbody>
    </Table>
  );
}

export default StoresTable;
