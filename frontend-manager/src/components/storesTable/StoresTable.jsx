import { useState } from 'react';
import {
  Table,
  TableBody,
  TableData,
  TableHeader,
  TableInput,
  TableRow,
} from '../table/table';

function StoresTable({ stores }) {
  const [isChecked, setIsChecked] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const displayArrayOfTableData = (array) => {
    return array.map((value) => {
      return <TableData>{value.name}</TableData>;
    });
  };

  const checkAllInput = (e) => {
    setIsCheckAll(!isCheckAll);
    setIsChecked(stores.map(({ _id }) => _id));
    if (isCheckAll) {
      setIsChecked([]);
    }
  };

  const onCheckHandler = (e) => {
    const { checked, id } = e.target;
    setIsChecked([...isChecked, id]);
    if (!checked) {
      setIsChecked(isChecked.filter((item) => item !== id));
    }
  };
  return (
    <Table>
      <thead>
        <TableRow height='3rem'>
          <TableHeader width='6rem'>
            <TableInput
              width='1rem'
              height='1rem'
              type='checkbox'
              onChange={checkAllInput}
            />
          </TableHeader>
          <TableHeader>Store Name</TableHeader>
          <TableHeader>Employees</TableHeader>
          <TableHeader>Registers</TableHeader>
          <TableHeader>Enabled</TableHeader>
        </TableRow>
      </thead>
      <TableBody>
        {stores.map(({ storeName, _id }) => {
          return (
            <TableRow key={_id} height={'8rem'}>
              <TableData>
                <TableInput
                  id={_id}
                  type='checkbox'
                  width='1rem'
                  height='1rem'
                  onChange={onCheckHandler}
                  checked={isChecked.includes(_id)}
                />
              </TableData>
              <TableData>{storeName}</TableData>
              <TableData></TableData>
              <TableData></TableData>
              <TableData></TableData>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}

export default StoresTable;
